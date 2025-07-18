import groq from 'groq'

export const heroFragment = groq`
  _type == "hero" => {
    _type,
    _key,
    heading,
    subheading,
    "image": image.asset->url,
    "imageAlt": image.alt,
    cta {
      label,
      link
    },
  }
`

// Example usage in a page query:
// export const pageQuery = groq`
//   *[_type == "page" && slug.current == $slug][0]{
//     title,
//     blocks[]{
//       ${heroFragment},
//       ${otherBlockFragment}
//     }
//   }
// ` 