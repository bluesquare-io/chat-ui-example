<template>
    <div class="loader">
        <div class="dots-container">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
    </div>
</template>

<style>
.loader {
    /*display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;*/
}

.dots-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.dot {
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background-color: #3498db;
    border-radius: 50%;
    animation: dotAnimation 1s infinite ease-in-out;
}

@keyframes dotAnimation {
    0% {
        opacity: 0.2;
        transform: translateY(0);
    }
    50% {
        opacity: 1;
        transform: translateY(-10px);
    }
    100% {
        opacity: 0.2;
        transform: translateY(0);
    }
}
</style>
