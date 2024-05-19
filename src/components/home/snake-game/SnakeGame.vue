<template>
  <div class="flex flex-col items-center justify-center h-full">

    <section
        class="from-[#175553] to-[#33BBB7] bg-gradient-to-br px-[30px] py-[35px] rounded-[8px] shadow-xl flex relative outline outline-[#010C15] border-t-[1px] border-t-secondary-blue">

      <div :class="`min-w-[${canvasWidth}px]`" class="bg-[#011627] relative rounded-[8px] shadow-inner">
        <canvas
            ref="gameCanvas"
            :width="canvasWidth"
            :height="canvasHeight"
            class="bg-[rgba(1,21,39,0.84)] rounded-[8px]"
        ></canvas>

        <div v-if="gameState !== 'STARTED' "
             class="!absolute bg-primary-dark-gray bottom-0 pb-[55px] w-full flex rounded-[8px]">

          <v-btn
              v-if="gameState === 'NOT_STARTED'"
              @click="game?.startGame()"
              color="#FEA55F"
              class="!mx-auto !lowercase text-black"
          >
            start-game
          </v-btn>

          <div class="flex flex-col w-full" v-if="gameState === 'LOST'">
            <div class="mx-auto text-secondary-light-green w-full text-center bg-primary-darker-gray py-2">
              <h1 class="text-subTitle">GAME OVER!</h1>
            </div>
            <v-btn
                @click="game?.startGame()"
                flat
                class="!mx-auto !lowercase !text-secondary-blue !bg-primary-dark-gray mt-2"
            >
              start-again
            </v-btn>
          </div>

          <div class="flex flex-col w-full bg-primary-dark-gray" v-if="gameState === 'WON'">
            <div class="mx-auto text-secondary-light-green w-full text-center bg-primary-darker-gray py-2">
              <h1 class="text-subTitle">WELL DONE!</h1>
            </div>
            <v-btn
                @click="game?.startGame()"
                flat
                class="!mx-auto !lowercase !text-secondary-blue !bg-primary-dark-gray mt-2"
            >
              play-again
            </v-btn>
          </div>


        </div>

      </div>

      <div class="ml-[24px] h-full flex flex-col justify-between">

        <div>
          <div class="bg-[rgba(1,20,35,0.19)] flex flex-col rounded-[8px] px-[13px] py-[16px]">

            <div class="flex flex-col">
              <span>// use keyboard</span>
              <span>// arrows to play</span>
            </div>

            <div class="mt-5 w-full flex flex-col justify-center items-center">
              <div class="w-full flex justify-center mb-1">
                <v-btn class="!min-w-[49px] !max-w-[49px] rounded-lg" height="29">
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.50002 0.309143L8.75003 6.30914H0.25L4.50002 0.309143Z" fill="white"/>
                  </svg>
                </v-btn>
              </div>
              <div class="flex gap-x-1">
                <v-btn class="!min-w-[49px] !max-w-[49px] rounded-lg" height="29">
                  <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.0390623 4.80914L6.03906 0.559128L6.03906 9.05916L0.0390623 4.80914Z" fill="white"/>
                  </svg>
                </v-btn>
                <v-btn class="!min-w-[49px] !max-w-[49px] rounded-lg" height="29">
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.49998 6.80914L0.24997 0.809142L8.75 0.809143L4.49998 6.80914Z" fill="white"/>
                  </svg>
                </v-btn>
                <v-btn class="!min-w-[49px] !max-w-[49px] rounded-lg" height="29">
                  <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.96045 4.80914L0.960449 9.05916L0.960449 0.559128L6.96045 4.80914Z" fill="white"/>
                  </svg>
                </v-btn>
              </div>

            </div>
          </div>

          <div class="mt-4 px-4">
            <span>// food left</span>
            <div class="mt-3 flex  flex-wrap-reverse flex-row-reverse max-w-[140px] gap-2">
              <div v-for="i in 10" :key="i" :class="i <= gameScore ? 'opacity-30' : '' "
                   class="bg-[#43D9AD1A] w-[21px] h-[21px] rounded-full grid place-items-center">
                <div class="bg-[#43D9AD33] w-[15px] h-[15px] rounded-full grid place-items-center">
                  <div class="bg-[#43D9AD] w-[9px] h-[9px] rounded-full">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <v-btn @click="$router.push({'name': 'about-me'})" variant="outlined" class="!lowercase float-end">
            skip
          </v-btn>
        </div>

      </div>

      <div>
        <v-btn icon="" size="13" class="bolt !text-lines-gray top-[13px] left-[13px] ">
          <span class="text-[7px] rotate-90 font-bold mr-[1px]">X</span>
        </v-btn>
        <v-btn icon="" size="13" class="bolt !text-lines-gray top-[13px] right-[13px]">
          <span class="text-[7px] rotate-90 font-bold">X</span>
        </v-btn>
        <v-btn icon="" size="13" class="bolt !text-lines-gray bottom-[13px] left-[13px]">
          <span class="text-[7px] rotate-90 font-bold mr-[1px]">X</span>
        </v-btn>
        <v-btn icon="" size="13" class="bolt !text-lines-gray bottom-[13px] right-[13px]">
          <span class="text-[7px] rotate-90 font-bold">X</span>
        </v-btn>
      </div>


    </section>

  </div>
</template>

<script lang="ts" setup>
import {onBeforeUnmount, onMounted, ref} from 'vue';
import {Game, GameState} from "@/components/home/snake-game/game.ts";

const gameCanvas = ref<HTMLCanvasElement | null>(null);

const gameScore = ref(0);
const setGameScore = (value: number) => gameScore.value = value;

const gameState = ref<GameState>('NOT_STARTED');
const setGameState = (value: GameState) => gameState.value = value;

let game: Game;
const canvasWidth = 240;
const canvasHeight = 400;
const boxSize = 10;

onMounted(() => {
  if (!gameCanvas.value) return;
  const ctx = gameCanvas.value.getContext('2d');
  if (!ctx) return;
  game = new Game(ctx, canvasWidth, canvasHeight, boxSize, setGameState, setGameScore);
  window.addEventListener('keydown', (event) => game?.handleKeydown(event));
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', (event) => game?.handleKeydown(event));
  if (game?.gameInterval) clearInterval(game.gameInterval);
});


</script>

<style scoped>
canvas {
  display: block;
  box-shadow: inset 0 0 15px black;
}


.bolt {
  position: absolute !important;
  background-color: #43D9AD;
  box-shadow: inset 0 0 5px black;
}
</style>
