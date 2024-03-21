<template>
  <article
    class="max-w-none prose dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-700"
  >
    <!-- prose-pre: for the code background to be visable -->
    <ContentDoc>
      <template #not-found>
        <h1>Document not found(404)</h1>
        <p>This blog post could not be found</p>
      </template>
      <template #default="{ doc }">
        <section class="grid grid-cols-6 gap-16">
          <main
            :class="{
              'md:col-span-4 col-span-6': doc.toc,
              'col-span-6': !doc.toc,
            }"
          >
            <ContentRenderer :value="doc" />
          </main>
          <aside v-show="doc.toc" class="col-span-2">
            <div class="sticky top-8">
              <p class="font-semibold mb-2">Table of Contents</p>
              <nav>
                <TocLinks :links="doc.body.toc.links" :active-id="activeId" />
              </nav>
            </div>
          </aside>
        </section>
      </template>
    </ContentDoc>
  </article>
</template>
<script setup>
const activeId = ref(null)
onMounted(() => {
  const callback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id
        break
      }
    }
  }
  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: '0px 0px -40% 0px', // 40% from the bottom of the viewport
    threshold: 1,
  })
  const elements = document.querySelectorAll('h2, h3') // only h2 and h3 highlighted
  for (const element of elements) {
    observer.observe(element)
  }
  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element)
    }
  })
})
</script>
<style>
h2 > a,
h3 > a,
h4 > a {
  text-decoration: none !important;
}

@media (max-width: 768px) {
  aside {
    display: none;
  }
}
</style>
