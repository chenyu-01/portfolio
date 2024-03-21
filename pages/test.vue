<template>
  <NestedLinks :links="links" />
</template>
<script setup>
const links = [
  { id: 'overview', depth: 2, text: 'Overview' },
  {
    id: 'sections',
    depth: 2,
    text: 'Sections',
    children: [
      {
        id: 'section-one-introduction',
        depth: 3,
        text: 'Section One: Introduction',
        children: [{ id: 'subsection-one', depth: 4, text: 'Subsection One' }],
      },
      { id: 'section-two-details', depth: 3, text: 'Section Two: Details' },
      {
        id: 'section-three-further-exploration',
        depth: 3,
        text: 'Section Three: Further Exploration',
      },
    ],
  },
]
</script>
