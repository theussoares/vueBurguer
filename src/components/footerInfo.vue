<template>
    <footer class="bg-gray3 h-20 flex justify-evenly items-center">
        <a href="https://github.com/theussoares" target="_blank" class="w-20">
            <img :src="git" alt="gitHub">
        </a>
        <a href="https://www.linkedin.com/in/matheusferreirasoares/" target="_blank" class="w-16">
            <img :src="linkedin" alt="gitHub">
        </a>
        <a href="https://wa.me:/+5567992171768" target="_blank" class="w-16">
            <img :src="whats" alt="gitHub">
        </a>
    </footer>
</template>

<script setup>
import git from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import whats from '../assets/whats.png'
</script>