<script setup lang="ts">
import BaseBtn from '@/components/Common/BaseBtn/BaseBtn.vue';
import BaseHeading from '@/components/Common/BaseHeading/BaseHeading.vue';
import BaseSection from '@/components/Common/BaseSection.vue';
import BaseStack from '@/components/Common/BaseStack/BaseStack.vue';
import BaseText from '@/components/Common/BaseText/BaseText.vue';
import { useTokenStore } from '@/stores/tokenStore';

const canvasRef = useTemplateRef('canvas');

const player = {
  x: 320 / 2 - 15,
  y: 320 - 30,
  width: 30,
  height: 15,
  color: 'white',
  speed: 10
};

const bullets = ref<{
  x: number;
  y: number;
  width: number;
  height: number;
}[]>([]);
const bulletSpeed = 5;


const context = computed(() => {
  return canvasRef.value?.getContext("2d");
})

const router = useRouter()
const store = useTokenStore()

const hasToken = computed(() => {
  return !!store.token
})

function onClickRight() {
  moveRight()
}

function onClickLeft() {
  moveLeft()
}

async function onClick() {
  await router.push({
    name: 'messagePage',
    params: {
      token: store.token,
    }
  })
}

function onFire() {
  fire();
}

function drawPlayer() {
  if (!context.value) return;
  context.value.clearRect(0, 0, 320, 320);
  context.value.fillStyle = player.color;
  context.value.fillRect(player.x, player.y, player.width, player.height);
}

function drawBullets() {
  if (!context.value) return;
  context.value.fillStyle = 'white';
  bullets.value.forEach(bullet => {
    context.value?.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
  });
}

function updateBullets() {
  for (let i = bullets.value.length - 1; i >= 0; i--) {
    const bullet = bullets.value[i];
    if (bullet) {
      bullet.y -= bulletSpeed;
      if (bullet.y + bullet.height < 0) {
        bullets.value.splice(i, 1);
      }
    }
  }
}

function moveRight() {
  if (!canvasRef.value) return
  player.x = Math.min(canvasRef.value.width - player.width, player.x + player.speed);
  drawPlayer();
}

function moveLeft() {
  if (!canvasRef.value) return
  player.x = Math.min(canvasRef.value.width - player.width, player.x - player.speed);
  drawPlayer();
  drawBullets()
}

function fire() {
  bullets.value.push({
    x: player.x + player.width / 2 - 2,
    y: player.y,
    width: 4,
    height: 10
  });
}

function gameLoop() {
  context.value?.clearRect(0, 0, canvasRef.value?.width ?? 320, canvasRef.value?.height ?? 320);
  updateBullets();
  drawPlayer();
  drawBullets();
  requestAnimationFrame(gameLoop);
}


onMounted(() => {
  gameLoop()
})

</script>

<template>
  <BaseSection>
    <BaseStack
      class="items-center"
      component="div"
      gap="lg"
    >
      <canvas
        ref="canvas"
        class="bg-primary"
        height="320"
        width="320"
      />

      <BaseBtn
        size="md"
        @click="onClickLeft"
      >
        ←
      </BaseBtn>

      <BaseBtn
        size="md"
        @click="onFire"
      >
        fire
      </BaseBtn>

      <BaseBtn
        size="md"
        @click="onClickRight"
      >
        →
      </BaseBtn>
      <BaseHeading
        tag="h1"
      >
        ごめんなさい！
      </BaseHeading>

      <BaseText>
        お探しのページは見つからなかったようです。
        <span v-if="!hasToken"><br>再度QRコードを読み込んでみてください！</span>
      </BaseText>
      <BaseBtn
        v-if="hasToken"
        behavior="block"
        color="primary"
        size="sm"
        variant="outline"
        @click="onClick"
      >
        新郎・新婦からのメッセージページに戻る
      </BaseBtn>
    </BaseStack>
  </BaseSection>
</template>
