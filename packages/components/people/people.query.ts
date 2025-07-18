import groq from 'groq'

export const peopleFragment = groq`
  _type == "people" => {
    _type,
    _key,
    heading,
    text,
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