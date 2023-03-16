<template>
  <q-page
    class="row items-center justify-evenly q-gutter-x-md q-pa-xl bg-grey-4"
  >
    <q-card>
      <q-card-section class="text-h6"> 정보 입력 폼 </q-card-section>
      <q-separator />
      <q-card-section class="q-gutter-y-sm">
        <div class="relative-position col">
          <div class="text-bold small-font q-pl-xs">한글 이름</div>
          <q-input
            dense
            square
            outlined
            v-model="krName"
            placeholder="ex) 신규현"
            hide-bottom-space
            class="hideErrorMessageSlot"
            @update:model-value="updateCode"
          />
        </div>
        <!-- <div class="relative-position col">
          <div class="text-bold small-font q-pl-xs">영어 이름</div>
          <q-input
            dense
            square
            outlined
            v-model="enName"
            placeholder="ex) Tom Shin"
            :rules="[(val) => (!!val && !!val.trim()) || '']"
            hide-bottom-space
            class="hideErrorMessageSlot"
          />
        </div> -->
        <div class="relative-position col">
          <div class="text-bold small-font q-pl-xs">직책</div>
          <q-input
            dense
            square
            outlined
            v-model="desc"
            placeholder="ex) Software Development Engineer"
            hide-bottom-space
            class="hideErrorMessageSlot"
            @update:model-value="updateCode"
          />
        </div>
        <div class="relative-position col">
          <div class="text-bold small-font q-pl-xs">소속</div>
          <q-input
            dense
            square
            outlined
            v-model="part"
            placeholder="ex) DX Division"
            hide-bottom-space
            class="hideErrorMessageSlot"
            @update:model-value="updateCode"
          />
        </div>
        <div class="relative-position col">
          <div class="text-bold small-font q-pl-xs">전화번호</div>
          <q-input
            dense
            square
            outlined
            v-model="telNum"
            placeholder="ex) 010-8905-7546"
            hide-bottom-space
            class="hideErrorMessageSlot"
            @update:model-value="updateCode"
          />
        </div>
        <div class="relative-position col">
          <div class="text-bold small-font q-pl-xs">이메일</div>
          <q-input
            dense
            square
            outlined
            v-model="email"
            placeholder="ex) tom.shin"
            hide-bottom-space
            class="hideErrorMessageSlot"
            suffix="@dxworks.kr"
            @update:model-value="updateCode"
          />
        </div>
        <div class="relative-position col">
          <div class="text-bold small-font q-pl-xs">사무실 전화번호 : {{ officeCall }}</div>
          <q-radio v-model="officeCall" val="070-8846-9136" label="서울" @update:model-value="updateCode" />
          <q-radio v-model="officeCall" val="070-8656-0670" label="대구" @update:model-value="updateCode" />
        </div>
      </q-card-section>
    </q-card>

    <div class="column q-gutter-y-md">
      <q-card>
        <q-card-section class="text-h6"> 미리보기 </q-card-section>
        <q-separator />
        <q-card-section id="preview">
          <div
            style="
              float: left;
              width: 100%;
              border-top: 2px solid #000;
              font-size: 14px;
            "
          >
            <div>
              <p
                style="
                  float: left;
                  border-bottom: 1px solid #ccc;
                  line-height: 3;
                "
              >
                <span style="font-size: 18px; font-weight: bold;">{{ krName }}</span>&nbsp;
                <span
                  style="font-weight: bold; line-height: 14px; margin-top: 4px"
                >
                  {{ desc }}</span
                >
              </p>
              <div style="float: right; width: 120px; padding: 15px">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 528.71 104.39" style="enable-background: new 0 0 528.71 104.39" xml:space="preserve"><g><path style="fill: #0d0a21" d="M197.25,39.02h14.64L222.78,83h0.54l11.88-43.97h12.59l11.87,44.06h0.54l10.89-44.06h14.65l-18.48,62.92h-13.13L241.8,60.4h-0.54l-12.41,41.54h-13.13L197.25,39.02z"></path><path style="fill: #0d0a21" d="M321.63,102.81c-17.24,0-30.27-11.86-30.27-32.33c0-20.55,13.03-32.33,30.27-32.33c17.09,0,30.18,11.77,30.18,32.33S338.73,102.81,321.63,102.81z M321.63,91.25c9.95-0.05,16.56-7.35,16.51-20.77c0.05-13.47-6.56-20.73-16.51-20.77c-10.05,0.04-16.61,7.3-16.61,20.77C305.03,83.91,311.58,91.21,321.63,91.25z"></path><path style="fill: #0d0a21" d="M361.46,39.02h25.36c14.69,0,23.13,8.04,23.13,20.51c0,8.6-4.06,14.86-11.43,17.94l13.75,24.46h-14.82l-12.36-22.33h-10.22v22.33h-13.39V39.02z M384.32,69.01c7.95,0,11.83-3.17,11.78-9.47c0.04-6.34-3.84-9.78-11.78-9.82h-9.46v19.3H384.32z"></path><path style="fill: #0d0a21" d="M419.24,39.02h13.39v27.89h0.89l23.48-27.89h16.16l-24.11,28.16l24.38,34.76h-16.08l-17.94-25.98l-6.79,7.99v17.99h-13.39V39.02z"></path><path style="fill: #0d0a21" d="M503.8,49.1c-6.79,0-10.58,3.04-10.62,7.21c-0.05,4.56,4.77,6.61,10.36,7.82l5.8,1.39c11.07,2.48,19.33,7.95,19.38,18.42c-0.04,11.52-9.24,18.9-25,18.86c-15.63,0.04-25.58-7-25.98-20.51h13.03c0.45,6.34,5.63,9.56,12.77,9.56c7.05,0,11.61-3.22,11.61-7.91c0-4.3-4.02-6.3-11.07-7.99l-7.05-1.65c-10.89-2.61-17.59-7.91-17.59-17.12c-0.04-11.43,10.32-19.03,24.47-19.03c14.33,0,23.75,7.73,23.93,18.85h-12.86C514.42,52.01,510.36,49.1,503.8,49.1z"></path><g><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="138.7289" y1="24.487" x2="188.4932" y2="24.487"><stop offset="0.0473" style="stop-color: #343293"></stop><stop offset="1" style="stop-color: #32298f"></stop></linearGradient><path style="fill: url(#SVGID_1_)" d="M152.85,48.97c-0.33,0-0.66-0.1-0.94-0.31c-0.7-0.52-0.84-1.51-0.33-2.2l32.2-43.31h-20.53l-21.7,28.39c-0.53,0.69-1.52,0.82-2.21,0.29c-0.69-0.53-0.82-1.52-0.29-2.21l22.17-29.01c0.3-0.39,0.76-0.62,1.25-0.62h24.44c0.6,0,1.14,0.34,1.41,0.87c0.27,0.53,0.21,1.17-0.14,1.65l-34.07,45.82C153.8,48.75,153.33,48.97,152.85,48.97z"></path></g><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="76.9151" y1="52.2522" x2="187.6846" y2="52.2522"><stop offset="0.2475" style="stop-color: #3c4ea1"></stop><stop offset="1" style="stop-color: #312a90"></stop></linearGradient><polygon style="fill: url(#SVGID_2_)" points="111.22,1.57 187.68,102.93 153.7,102.93 132.46,74.47 111.22,102.48 85.67,102.48 119.3,57.15 76.92,1.57 "></polygon><g><path style="fill: #54ba9e" d="M21.98,104.39H1.58c-0.87,0-1.58-0.71-1.58-1.58V1.58C0,0.71,0.71,0,1.58,0h20.4c0.87,0,1.58,0.71,1.58,1.58c0,0.87-0.71,1.58-1.58,1.58H3.15v98.08H20.4V28.35c0-0.87,0.71-1.58,1.58-1.58c0.87,0,1.58,0.71,1.58,1.58v74.46C23.55,103.68,22.85,104.39,21.98,104.39z"></path></g><linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="28.0811" y1="52.1925" x2="87.7122" y2="52.1925"><stop offset="0" style="stop-color: #4eb2ca"></stop><stop offset="1" style="stop-color: #3e53a3"></stop></linearGradient><path style="fill: url(#SVGID_3_)" d="M39.93,1.57H28.08v25.54h10.65c13.71,0,22.84,9.97,22.84,24.99c0,14.94-9.14,25.16-22.84,25.16H28.08v25.54h11.85c27.95,0,47.78-21.16,47.78-50.7C87.71,22.53,67.95,1.57,39.93,1.57z"></path><g><path style="fill: #0d0a21" d="M362.72,11.23c0,1.39-0.22,2.6-0.65,3.62c-0.43,1.03-1.05,1.88-1.84,2.57c-0.8,0.69-1.75,1.2-2.87,1.53c-1.12,0.33-2.36,0.5-3.72,0.5c-0.65,0-1.38-0.03-2.2-0.08c-0.82-0.05-1.6-0.17-2.34-0.34V3.45c0.74-0.17,1.53-0.28,2.36-0.32c0.83-0.05,1.58-0.07,2.22-0.07c1.34,0,2.57,0.16,3.68,0.47s2.06,0.81,2.86,1.48c0.8,0.67,1.41,1.52,1.84,2.55C362.51,8.59,362.72,9.81,362.72,11.23z M352.03,16.86c0.17,0.02,0.39,0.03,0.67,0.03c0.28,0.01,0.66,0.01,1.13,0.01c1.96,0,3.42-0.5,4.39-1.49s1.45-2.39,1.45-4.18c0-1.82-0.47-3.22-1.41-4.19c-0.94-0.97-2.4-1.46-4.38-1.46c-0.87,0-1.48,0.02-1.85,0.07V16.86z"></path><path style="fill: #0d0a21" d="M368.91,3.61c0,0.52-0.17,0.94-0.51,1.25c-0.34,0.31-0.74,0.46-1.2,0.46c-0.48,0-0.89-0.15-1.23-0.46c-0.34-0.31-0.51-0.73-0.51-1.25c0-0.54,0.17-0.96,0.51-1.27c0.34-0.31,0.75-0.46,1.23-0.46c0.46,0,0.86,0.15,1.2,0.46C368.74,2.65,368.91,3.07,368.91,3.61z M368.61,19.27h-2.8V7.16h2.8V19.27z"></path><path style="fill: #0d0a21" d="M382.18,18.04c0,1.93-0.49,3.34-1.47,4.24c-0.98,0.89-2.48,1.34-4.5,1.34c-0.74,0-1.46-0.06-2.17-0.18s-1.34-0.29-1.91-0.49l0.51-2.39c0.48,0.2,1.02,0.36,1.63,0.49c0.61,0.12,1.27,0.18,1.98,0.18c1.13,0,1.93-0.23,2.41-0.69c0.48-0.46,0.72-1.15,0.72-2.06v-0.46c-0.28,0.14-0.64,0.28-1.1,0.42c-0.46,0.14-0.98,0.21-1.56,0.21c-0.77,0-1.48-0.12-2.12-0.37c-0.64-0.25-1.19-0.61-1.64-1.09c-0.46-0.48-0.81-1.08-1.06-1.79c-0.26-0.72-0.38-1.55-0.38-2.49c0-0.88,0.13-1.69,0.41-2.43c0.27-0.74,0.66-1.37,1.18-1.9c0.52-0.52,1.15-0.93,1.89-1.23c0.74-0.29,1.58-0.44,2.52-0.44c0.91,0,1.78,0.07,2.6,0.21c0.82,0.14,1.51,0.29,2.08,0.44V18.04z M374.37,12.9c0,1.19,0.26,2.06,0.77,2.6c0.52,0.55,1.19,0.82,2,0.82c0.45,0,0.87-0.06,1.26-0.19c0.39-0.12,0.71-0.27,0.96-0.44V9.43c-0.2-0.05-0.45-0.09-0.74-0.13c-0.29-0.04-0.67-0.06-1.11-0.06c-1.02,0-1.8,0.34-2.34,1.01C374.64,10.92,374.37,11.8,374.37,12.9z"></path><path style="fill: #0d0a21" d="M388.87,3.61c0,0.52-0.17,0.94-0.51,1.25c-0.34,0.31-0.74,0.46-1.2,0.46c-0.48,0-0.89-0.15-1.23-0.46c-0.34-0.31-0.51-0.73-0.51-1.25c0-0.54,0.17-0.96,0.51-1.27c0.34-0.31,0.75-0.46,1.23-0.46c0.46,0,0.86,0.15,1.2,0.46C388.7,2.65,388.87,3.07,388.87,3.61z M388.57,19.27h-2.8V7.16h2.8V19.27z"></path><path style="fill: #0d0a21" d="M392,3.96l2.8-0.46v3.66h4.31V9.5h-4.31v4.93c0,0.97,0.15,1.67,0.46,2.08c0.31,0.42,0.83,0.63,1.58,0.63c0.51,0,0.96-0.05,1.35-0.16c0.39-0.11,0.71-0.21,0.94-0.3l0.46,2.22c-0.32,0.14-0.75,0.28-1.27,0.43c-0.53,0.15-1.14,0.22-1.85,0.22c-0.87,0-1.59-0.12-2.17-0.35c-0.58-0.23-1.04-0.57-1.38-1.01c-0.34-0.44-0.58-0.97-0.72-1.6c-0.14-0.62-0.21-1.34-0.21-2.14V3.96z"></path><path style="fill: #0d0a21" d="M405.85,6.85c0.93,0,1.71,0.12,2.34,0.35c0.63,0.23,1.14,0.56,1.52,0.97c0.38,0.42,0.65,0.92,0.81,1.52s0.24,1.25,0.24,1.96v7.34c-0.43,0.09-1.08,0.2-1.96,0.34c-0.87,0.13-1.86,0.2-2.95,0.2c-0.73,0-1.39-0.07-1.99-0.21c-0.6-0.14-1.12-0.36-1.54-0.67c-0.42-0.31-0.76-0.71-1-1.2c-0.24-0.49-0.36-1.1-0.36-1.83c0-0.69,0.13-1.28,0.41-1.76c0.27-0.48,0.64-0.87,1.1-1.17c0.46-0.3,1-0.52,1.61-0.65c0.61-0.13,1.25-0.2,1.91-0.2c0.31,0,0.63,0.02,0.97,0.06c0.34,0.04,0.7,0.1,1.09,0.2v-0.46c0-0.32-0.04-0.63-0.12-0.93c-0.08-0.29-0.21-0.55-0.41-0.78c-0.19-0.22-0.45-0.4-0.76-0.52c-0.32-0.12-0.71-0.19-1.19-0.19c-0.65,0-1.24,0.05-1.78,0.14c-0.54,0.09-0.98,0.2-1.32,0.33l-0.35-2.27c0.35-0.12,0.87-0.25,1.55-0.37C404.35,6.92,405.08,6.85,405.85,6.85z M406.08,17.3c0.87,0,1.52-0.05,1.97-0.14v-3.1c-0.15-0.05-0.38-0.09-0.67-0.14c-0.29-0.05-0.62-0.07-0.97-0.07c-0.31,0-0.62,0.02-0.94,0.07c-0.32,0.05-0.6,0.13-0.86,0.25c-0.25,0.12-0.46,0.3-0.61,0.52c-0.15,0.22-0.23,0.51-0.23,0.85c0,0.66,0.21,1.12,0.63,1.38C404.81,17.17,405.37,17.3,406.08,17.3z"></path><path style="fill: #0d0a21" d="M418.4,19.5c-0.83-0.02-1.52-0.11-2.07-0.28c-0.55-0.17-0.98-0.41-1.31-0.73c-0.32-0.32-0.55-0.71-0.68-1.18c-0.13-0.47-0.2-1.01-0.2-1.61V1.76l2.8-0.46v13.87c0,0.34,0.03,0.63,0.08,0.86c0.05,0.23,0.15,0.43,0.29,0.59c0.14,0.16,0.33,0.29,0.57,0.37c0.24,0.09,0.54,0.15,0.91,0.2L418.4,19.5z"></path><path style="fill: #0d0a21" d="M426.6,3.22h2.92v16.05h-2.92V3.22z"></path><path style="fill: #0d0a21" d="M433.22,7.55c0.54-0.15,1.24-0.3,2.11-0.44c0.87-0.14,1.82-0.21,2.87-0.21c0.99,0,1.82,0.14,2.48,0.41c0.66,0.27,1.19,0.65,1.59,1.14s0.67,1.07,0.83,1.76c0.16,0.69,0.24,1.44,0.24,2.26v6.81h-2.8V12.9c0-0.65-0.04-1.2-0.13-1.66c-0.09-0.46-0.22-0.83-0.42-1.11c-0.19-0.29-0.45-0.49-0.79-0.63c-0.33-0.13-0.74-0.2-1.22-0.2c-0.36,0-0.73,0.02-1.11,0.07c-0.39,0.05-0.67,0.08-0.86,0.12v9.77h-2.8V7.55z"></path><path style="fill: #0d0a21" d="M446.77,7.55c0.54-0.15,1.24-0.3,2.11-0.44c0.87-0.14,1.82-0.21,2.87-0.21c0.99,0,1.82,0.14,2.48,0.41c0.66,0.27,1.19,0.65,1.59,1.14s0.67,1.07,0.83,1.76c0.16,0.69,0.24,1.44,0.24,2.26v6.81h-2.8V12.9c0-0.65-0.04-1.2-0.13-1.66c-0.09-0.46-0.22-0.83-0.42-1.11c-0.19-0.29-0.45-0.49-0.79-0.63c-0.33-0.13-0.74-0.2-1.22-0.2c-0.36,0-0.73,0.02-1.11,0.07c-0.39,0.05-0.67,0.08-0.86,0.12v9.77h-2.8V7.55z"></path><path style="fill: #0d0a21" d="M471.27,13.2c0,0.96-0.14,1.83-0.42,2.62c-0.28,0.79-0.67,1.46-1.18,2.01c-0.51,0.56-1.12,0.99-1.84,1.3c-0.72,0.31-1.51,0.46-2.37,0.46s-1.65-0.15-2.36-0.46c-0.71-0.31-1.32-0.74-1.83-1.3s-0.91-1.23-1.19-2.01c-0.29-0.79-0.43-1.66-0.43-2.62s0.14-1.83,0.43-2.61c0.29-0.78,0.69-1.45,1.2-2c0.52-0.56,1.13-0.98,1.84-1.29c0.71-0.3,1.49-0.45,2.34-0.45s1.63,0.15,2.35,0.45c0.72,0.3,1.33,0.73,1.84,1.29c0.51,0.56,0.91,1.22,1.19,2C471.13,11.38,471.27,12.24,471.27,13.2z M468.4,13.2c0-1.2-0.26-2.16-0.78-2.86c-0.52-0.7-1.24-1.05-2.17-1.05c-0.93,0-1.65,0.35-2.17,1.05c-0.52,0.7-0.77,1.66-0.77,2.86c0,1.22,0.26,2.19,0.77,2.89c0.52,0.71,1.24,1.07,2.17,1.07c0.93,0,1.65-0.36,2.17-1.07C468.14,15.39,468.4,14.42,468.4,13.2z"></path><path style="fill: #0d0a21" d="M477.01,19.27c-0.77-1.59-1.57-3.42-2.38-5.48s-1.55-4.27-2.22-6.64h2.99c0.17,0.68,0.37,1.41,0.59,2.19c0.23,0.78,0.47,1.56,0.72,2.34c0.26,0.78,0.52,1.54,0.79,2.27c0.27,0.73,0.52,1.39,0.76,1.98c0.23-0.59,0.48-1.25,0.74-1.98s0.52-1.49,0.78-2.27c0.25-0.78,0.5-1.56,0.73-2.34c0.23-0.78,0.43-1.51,0.61-2.19h2.89c-0.67,2.36-1.41,4.57-2.22,6.64s-1.61,3.89-2.38,5.48H477.01z"></path><path style="fill: #0d0a21" d="M490.1,6.85c0.93,0,1.71,0.12,2.34,0.35c0.63,0.23,1.14,0.56,1.52,0.97c0.38,0.42,0.65,0.92,0.81,1.52c0.16,0.59,0.24,1.25,0.24,1.96v7.34c-0.43,0.09-1.08,0.2-1.96,0.34s-1.86,0.2-2.95,0.2c-0.73,0-1.39-0.07-1.99-0.21c-0.6-0.14-1.12-0.36-1.54-0.67c-0.42-0.31-0.76-0.71-1-1.2c-0.24-0.49-0.36-1.1-0.36-1.83c0-0.69,0.13-1.28,0.41-1.76c0.27-0.48,064-0.87,1.1-1.17c0.46-0.3,1-0.52,1.61-0.65c0.61-0.13,1.25-0.2,1.91-0.2c0.31,0,0.63,0.02,0.97,0.06c0.34,0.04,0.7,0.1,1.09,0.2v-0.46c0-0.32-0.04-0.63-0.12-0.93c-0.08-0.29-0.21-0.55-0.41-0.78c-0.19-0.22-0.45-0.4-0.76-0.52c-0.32-0.12-0.71-0.19-1.19-0.19c-0.65,0-1.24,0.05-1.78,0.14c-0.54,0.09-0.98,0.2-1.32,0.33l-0.35-2.27c0.35-0.12,0.87-0.25,1.55-0.37C488.61,6.92,489.33,6.85,490.1,6.85z M490.33,17.3c0.87,0,1.52-0.05,1.97-0.14v-3.1c-0.15-0.05-0.38-0.09-0.67-0.14c-0.29-0.05-0.62-0.07-0.97-0.07c-0.31,0-0.62,0.02-0.94,0.07c-0.32,0.05-0.6,0.13-0.86,0.25c-0.25,0.12-0.46,0.3-0.61,0.52c-0.15,0.22-0.23,0.51-0.23,0.85c0,0.66,0.21,1.12,0.63,1.38C489.06,17.17,489.62,17.3,490.33,17.3z"></path><path style="fill: #0d0a21" d="M498.3,3.96l2.8-0.46v3.66h4.31V9.5h-4.31v4.93c0,0.97,0.15,1.67,0.46,2.08c0.31,0.42,0.83,0.63,1.58,0.63c0.51,0,0.96-0.05,1.35-0.16c0.39-0.11,0.71-0.21,0.94-0.3l0.46,2.22c-0.32,0.14-0.75,0.28-1.27,0.43c-0.53,0.15-1.14,0.22-1.85,0.22c-0.87,0-1.59-0.12-2.17-0.35c-0.58-0.23-1.04-0.57-1.38-1.01c-0.34-0.44-0.58-0.97-0.72-1.6c-0.14-0.62-0.21-1.34-0.21-2.14V3.96z"></path><path style="fill: #0d0a21" d="M518.8,13.2c0,0.96-0.14,1.83-0.42,2.62c-0.28,0.79-0.67,1.46-1.18,2.01c-0.51,0.56-1.12,0.99-1.84,1.3c-0.72,0.31-1.51,0.46-2.37,0.46s-1.65-0.15-2.36-0.46c-0.71-0.31-1.32-0.74-1.83-1.3s-0.91-1.23-1.19-2.01c-0.29-0.79-0.43-1.66-0.43-2.62s0.14-1.83,0.43-2.61c0.29-0.78,0.69-1.45,1.2-2c0.52-0.56,1.13-0.98,1.84-1.29c0.71-0.3,1.49-0.45,2.34-0.45s1.63,0.15,2.35,0.45c0.72,0.3,1.33,0.73,1.84,1.29c0.51,0.56,0.91,1.22,1.19,2C518.66,11.38,518.8,12.24,518.8,13.2z M515.93,13.2c0-1.2-0.26-2.16-0.78-2.86c-0.52-0.7-1.24-1.05-2.17-1.05c-0.93,0-1.65,0.35-2.17,1.05c-0.52,0.7-0.77,1.66-0.77,2.86c0,1.22,0.26,2.19,0.77,2.89c0.52,0.71,1.24,1.07,2.17,1.07c0.93,0,1.65-0.36,2.17-1.07C515.67,15.39,515.93,14.42,515.93,13.2z"></path><path style="fill: #0d0a21" d="M528.59,9.68c-0.23-0.08-0.55-0.16-0.96-0.24c-0.41-0.08-0.88-0.13-1.42-0.13c-0.31,0-0.64,0.03-0.98,0.09c-0.35,0.06-0.59,0.12-0.73,0.16v9.7h-2.8V7.73c0.54-0.2,1.22-0.39,2.03-0.57c0.81-0.18,1.71-0.27,2.7-0.27c0.18,0,0.4,0.01,0.65,0.03c0.25,0.02,0.49,0.05,0.74,0.09c0.25,0.04,0.49,0.08,0.72,0.14c0.23,0.05,0.42,0.1,0.56,0.15L528.59,9.68z"></path></g></g></svg>
              </div>
            </div>
            <p style="clear: both; line-height: 2">
              {{ part }}
            </p>
            <p style="text-align: left"><br /></p>
            <p style="text-align: left">
              <span style="color: rgb(0, 150, 255); font-weight: bold">M</span>&nbsp;
              <a :href="`tel:${telNum}`">{{ telNum }}</a>
              <span style="color: #ccc">&nbsp;|&nbsp;</span>
              <span style="color: rgb(0, 150, 255); font-weight: bold">T</span>&nbsp;
              <a :href="`tel:${officeCall}`">{{ officeCall }}</a>
              <span style="color: #ccc">&nbsp;|&nbsp;</span>
              <span style="color: rgb(0, 150, 255); font-weight: bold">F</span>&nbsp;02-401-7439
            </p>
            <p style="text-align: left">
              <span style="color: rgb(0, 150, 255); font-weight: bold">W</span>&nbsp;
              <a href="https://dxworks.kr">dxworks.kr</a>
              <span style="color: #ccc">&nbsp;|&nbsp;</span>
              <span style="color: rgb(0, 150, 255); font-weight: bold">E</span>&nbsp;
              <a :href="`mailto:${email}@dxworks.kr`">{{ `${email}@dxworks.kr` }}</a>
            </p>
            <p style="text-align: left">
              <span style="color: rgb(0, 150, 255); font-weight: bold">A</span>&nbsp;41196) 대구광역시
              동구 경대로 36, 무지개빌딩 6층
            </p>
            <p style="text-align: left">
              <span style="color: rgb(0, 150, 255); font-weight: bold">A</span>&nbsp;05854) 서울특별시
              송파구 법원로 128. SK V1 메트로시티 C동 1505호
            </p>
          </div>
        </q-card-section>
      </q-card>

      <q-card class="col">
        <q-card-section class="flex justify-between items-center">
          <span class="text-h6"> 경량화 코드</span>
          <q-icon
            class="q-field__focusable-action"
            type="button"
            tag="button"
            :role="null"
            :aria-hidden="null"
            name="content_copy"
            size="sm"
            v-if="hasClipboard"
            @click="copyCodeToClip"
          >
            <q-tooltip class="text-body1"> 클립보드에 복사 </q-tooltip>
          </q-icon>
        </q-card-section>
        <q-separator />
        <q-card-section class="q-py-xs">
          <highlightjs language="html" :code="minifyCode" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { defineComponent, ref, watch, onMounted, computed, onUpdated, nextTick } from "vue";
import IMEInput from "src/components/IME/IMEInput";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import { useQuasar } from "quasar";
// const minify = require('html-minifier').minify;

const highlightjs = hljsVuePlugin.component;

const $q = useQuasar();

const krName = ref("신규현");
const enName = ref("Tom Shin");
const desc = ref("Junior Software Developer");
const part = ref("Software Development Group");
const telNum = ref("010-8905-7546");
const email = ref("tom.shin");
const officeCall = ref('070-8846-9136')

const minifyCode = ref('')

const hasClipboard = ref(!!navigator.clipboard);

function updateCode() {
  nextTick(() => {
    minifyCode.value = document.getElementById("preview")?.innerHTML || "";
  })
}

function copyCodeToClip() {
  navigator.clipboard
    .writeText(minifyCode.value)
    .then(() => {
      $q.notify({
        message: "복사 성공!!",
        color: "green",
        icon: "done_all",
      });
    })
    .catch(() => {
      $q.notify({
        message: "복사 실패!! 반복적으로 실패 시 담당자에게 문의해주세요.",
        color: "red",
        icon: "sentiment_very_dissatisfied",
      });
    });
}

onMounted(() => {
  updateCode();
});
</script>

<style lang="sass">
.hljs
  width: 865px
  max-width: 865px
  min-width: 865px
  word-break: break-all
  word-wrap: break-word
  white-space: pre-line
  max-height: 300px
  overflow-y: auto

p
  margin: 0
</style>
