<template>
  <footer class="p-56 bg-tertiary ">
    <main class=" flex items-start justify-center gap-11 w-full ">
      <section class="w-1/3">
        <h2 class="text-xl">QUICK LINK <br/>
          <div class="h-1 w-14 mt-2 bg-primary"/>
        </h2>
        <ul class="pl-4 flex flex-col gap-3 pt-4">
          <li class="list-disc">Home</li>
          <li class="list-disc">About</li>
          <li class="list-disc">Services</li>
          <li class="list-disc">Portfolio</li>
          <li class="list-disc">Contact</li>
        </ul>
      </section>
      <section class="w-1/3 "> 
          <h2 class="text-xl">SUPPORT :<br/>
            <div class="w-16 h-1 bg-primary mt-2"/>
          </h2>
        <ul class="flex flex-col gap-3 pt-4 pl-4">
          <li class="list-disc">FAQ</li>
          <li class="list-disc">Employment</li>
          <li class="list-disc">Request A Quote</li>
        </ul>
      </section>
      <section class="flex flex-col items-center w-1/3 h-full self-center">
        <img src="~/assets/images/logo.png" alt="logo" width="500"/>
        <ul class="flex">
          <li><Icon name="mdi:facebook" /></li>
          <li><Icon name="mdi:pinterest" /></li>
          <li><Icon name="mdi:instagram" /></li>
        </ul>
      </section>
      <section class="w-1/3">
        <h2>MORE INFO<br/>
          <div class="w-14 h-1 bg-primary mt-2"/>
        </h2>
        <ul class="flex flex-col gap-3 pt-4 pl-4">
          <li class="list-disc">News</li>
          <li class="list-disc">Media</li>
          <li class="list-disc">Videos</li>
          <li class="list-disc">Blog</li>
        </ul>
      </section>
      <section class="w-1/5 ">
        <h2>CONTACT<br/>
          <div class="w-20 h-1 bg-primary mt-2"/>
        </h2>
        <ul class="flex flex-col gap-3 pt-4">
            <li class="flex items-start gap-2">
                <Icon name="mdi:location" class="text-5xl"/>
                <p>
                    105059 schoger Dr.Unit 23 Nopeville, jl 60564
                </p>
            </li>
            <li class="flex items-start gap-2">
                <Icon name="mdi:email" class="text-xl"/>
                <p>
                    sales@myguysknowyou.com
                </p>
            </li>
        </ul>
      </section>
    </main>
  </footer>
</template>
