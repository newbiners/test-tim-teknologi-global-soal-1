<template>
    <span class="flex flex-col items-center justify-center">
        <div class="relative border-obj md:w-auto w-72">
            <div class="border-obj1"></div>
            <h1 class="text-center px-4 py-6 text-2xl md:text-4xl xl:text-7xl font-extrabold alfa-slab-one-regular">
                EXPLORE,<br/>DREAM & CREATE
            </h1>
        </div>
        <p id="pop" class="text-center w-10/12 font-semibold md:font-medium -translate-y-3 text-sm sm:text-lg md:text-xl xl:text-2xl">
            Our service offer countless possibilities.
        </p>
        <ButtonBoxTwo :title="'READ MORE'" :status="true" :solid="true"/>
    </span>
</template>

<style scoped>
.border-obj1 {
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #6DBE45;
}

.border-obj1::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 110px;
    background-color: #6DBE45;
    top: 0;
    right: 0;
}

.border-obj1::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 110px;
    background-color: #6DBE45;
    top: 0;
    left: 0;
}

.border-obj::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 4px;
    background-color: #6DBE45;
    bottom: 0;
    left: 0;
}

.border-obj::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 4px;
    background-color: #6DBE45;
    bottom: 0;
    right: 0;
}



@media only screen and (min-width: 768px) {
    .border-obj1::before {
        height: 125px;
    }
    .border-obj1::after {
        height: 125px;
    }
    .border-obj::before {
        width: 30px;
    }
    .border-obj::after {
        width: 30px;
    }
}

@media only screen and (min-width: 1280px) {
    .border-obj1::before {
        height: 190px;
    }
    .border-obj1::after {
        height: 190px;
    }
    .border-obj::before {
        width: 70px;
    }
    .border-obj::after {
        width: 70px;
    }
}

</style>
