// turbo/generators/config.ts
import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // Register Handlebars helpers
  plop.setHelper('eq', function (a, b) {
    return a === b;
  });

  plop.setGenerator("component", {
    description: "Generate a new content component with Sanity schema",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name (e.g., hero, testimonial):",
        validate: (input) => {
          if (!input) return "Component name is required";
          if (!/^[a-z][a-z0-9-]*$/.test(input)) {
            return "Component name must be lowercase with hyphens only";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "title",
        message: "Component display name (e.g., Hero Section):",
      },
      {
        type: "list",
        name: "template",
        message: "Start from template:",
        choices: [
          { name: "Basic (heading + text)", value: "basic" },
          { name: "Hero (heading + text + image + CTA)", value: "hero" },
          { name: "Card List (heading + array of cards)", value: "card-list" },
          { name: "Testimonial (quote + author + image)", value: "testimonial" },
          { name: "Custom (empty schema)", value: "custom" },
        ],
      },
      {
        type: "confirm",
        name: "includeExamples",
        message: "Include example fields as comments?",
        default: true,
        when: (answers) => answers.template === 'custom',
      },
    ],
    actions: (data) => {
      const actions: PlopTypes.ActionType[] = [];
      
      // Schema file
      actions.push({
        type: "add",
        path: "packages/components/{{kebabCase name}}/{{kebabCase name}}.schema.ts",
        templateFile: `templates/component/schema-${data?.template || 'basic'}.ts.hbs`,
      });
      
      // Query file
      actions.push({
        type: "add",
        path: "packages/components/{{kebabCase name}}/{{kebabCase name}}.query.ts",
        templateFile: "templates/component/query.ts.hbs",
      });
      
      // Component file
      actions.push({
        type: "add",
        path: "packages/components/{{kebabCase name}}/{{kebabCase name}}.component.tsx",
        templateFile: "templates/component/component.tsx.hbs",
      });
      
      // Types file
      actions.push({
        type: "add",
        path: "packages/components/{{kebabCase name}}/{{kebabCase name}}.types.ts",
        templateFile: "templates/component/types.ts.hbs",
      });
      
      // Test file
      actions.push({
        type: "add",
        path: "packages/components/{{kebabCase name}}/{{kebabCase name}}.test.tsx",
        templateFile: "templates/component/test.tsx.hbs",
      });
      
      // Storybook file
      actions.push({
        type: "add",
        path: "packages/components/{{kebabCase name}}/{{kebabCase name}}.stories.tsx",
        templateFile: "templates/component/stories.tsx.hbs",
      });
      
      // Index file
      actions.push({
        type: "add",
        path: "packages/components/{{kebabCase name}}/{{kebabCase name}}.index.ts",
        templateFile: "templates/component/index.ts.hbs",
      });
      
      // Update package.json exports
      actions.push({
        type: "modify",
        path: "packages/components/package.json",
        pattern: /(\"exports\": \{)/,
        template: `$1\n    "./{{kebabCase name}}": "./{{kebabCase name}}/index.ts",`,
      });
      
      // Update main components index
      actions.push({
        type: "modify",
        path: "packages/components/index.ts",
        pattern: /(\/\/ Export all components)/,
        template: `$1\n// Export {{pascalCase name}} component\nexport * from './{{kebabCase name}}'`,
      });
      
      return actions;
    },
  });
}