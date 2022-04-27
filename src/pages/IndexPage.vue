<template>
  <q-page class="row items-center justify-evenly q-gutter-x-md q-pa-xl bg-grey-4">
    <q-card>
      <q-card-section class="text-h6">
        정보 입력 폼
      </q-card-section>
      <q-separator />
      <q-card-section class="q-gutter-y-sm">
        <div class="relative-position col">
          <div class="text-bold small-font q-pl-xs">한글 이름</div>
          <IMEInput
            dense
            square
            outlined
            v-model="krName"
            placeholder="ex) 신규현"
            :rules="[val => !!val && !!val.trim() || '']"
            hide-bottom-space
            class="hideErrorMessageSlot"
          />
        </div>
        <div class="relative-position col">
          <div class="text-bold small-font q-pl-xs">영어 이름</div>
          <q-input
            dense
            square
            outlined
            v-model="enName"
            placeholder="ex) Tom Shin"
            :rules="[val => !!val && !!val.trim() || '']"
            hide-bottom-space
            class="hideErrorMessageSlot"
          />
        </div>
        <div class="relative-position col">
          <div class="text-bold small-font q-pl-xs">설명글</div>
          <q-input
            dense
            square
            outlined
            v-model="desc"
            placeholder="ex) Software Development Engineer"
            :rules="[val => !!val && !!val.trim() || '']"
            hide-bottom-space
            class="hideErrorMessageSlot"
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
            :rules="[val => !!val && !!val.trim() || '']"
            hide-bottom-space
            class="hideErrorMessageSlot"
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
            :rules="[val => !!val && !!val.trim() || '']"
            hide-bottom-space
            class="hideErrorMessageSlot"
            suffix="@xenoplex.kr"
          />
        </div>
      </q-card-section>
    </q-card>

    <div class="column q-gutter-y-md">
      <q-card>
        <q-card-section class="text-h6"> 미리보기 </q-card-section>
        <q-separator />
        <q-card-section id="preview">
          <div style="display: flex; gap: 5px; flex-wrap: wrap;">
            <div
              style="
                width: 430px;
                height: 240px;
                background-color: #32425f;
                position: relative;
                display: flex;
                flex-wrap: wrap;
                -ms-flex-wrap: wrap;
                align-items: center;
                justify-content: center;
              "
            >
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXAAAABICAYAAADvR65LAAAACXBIWXMAAAsSAAALEgHS3X78AAAPBklEQVR4nO2d+3EbORLG4a37n7wIyItAvAhER2BdBKIjWF4EoiNYbgRHRbByBKYiWDKCIyO4YQS8mnXDhmbw+hrAPKj+VbG8OyLnifnQaHQ3PlyvV6WUWiilpgpjD34/liXw3RN9bMzp0xcHpVTlOLbtftu21de2a/06D5vIvcR+LwfLyOdW0f313WNBGBuI9v3V9rWA1y/pU+srfj4XEJcHpdQfra12LiR6LgHnXFNOPno6uXr7fWurHd9+UrhG/vZDa0s+6ue3ooZ7x9zrke7Pjhp1KeZ0rqU5GZ1TCjEd787z/uSkq3tnI+Yal6B4bgsYDvXxv7W2uvn7X+dQC/j1ep1er9fqinGi3+b8nIAzWAeOu2n9oluWlnPSnz1wJgfL73N8Ysl93LqtrcBnHcuJnvvUctzUz7Lj9nOi+8Q97xh8bXTM984k5hrnrV/52Vj2kfpBNGGnj/UL6XtFvQrCLPPwekP7jOHION+xctexG6MkG7KG/gM8a4QZjbpOdCzULTgkZnSfDjRSEcpRt5dnYO/rzG1rCYzIlakHvxgbOYKY60LmtC/kuO+Jp579+aks6SWpr2PSwfEmdKwDueXGzB25iETEy7Imt2wMk8wahBhoz6ZLyBTwCuyFVMYL2QIv9teCE6hDptRkZmm25NsrYXGHmNGcym7k1viE2vyYO/Ghg3oh1pmexwq0vt/owC+NP3KG6qkXUltnn1pb3bw361tz3+NEEIcpWcC/DuBcHm9AAGsRf2ltFXJSC/gZeB45XJvIPl6bxmtTwFFfkMpwIUiv99zRrPlQ2Y7EklyQeHMjS0pwdwP+5LuRdeJjowK17DHRKFiBI9PWuTUF3PqlCLgXsgZe8gtofd/icHMyAlfKgqyEPlwmISY34E8e44T2mNxXO8AKV4nPI8n6Vg4B51jhijEJOgUvAI29vFV/4ScwZrVLpvQCdDFRyWXsIj4b4cTs2O41MsrhGq+o9W013GwCrpi9CiosG+BFv7yjsMEYhjopt8/kNjmTxfGl8XkFrSMXk5FPbI49smbo7KmtxYLq5RTUs7NLwP/W2vIdbYU/tv7iZxMp4gtwcmstKdNv0DH4Q5rQ3SaKt26kMZlzOrMPtWJM7uhYJcTwS2uLnQfmPRvqCOyWqN+tPyOv59HIcYhhDY5S3R2EJ3sIzU7SxGQ+IVlH3IzP2GPYflv6g1y/j0XhTL3Y+5OSaVdFZNX6PmtGFrHJg2ff3Gu0/d71eWCe/9yxP+T5dpWJGZsVbfttn59d6wzd7CPPE8169+qfy4WiEnzhVlPfAI17dPc+wlAmNLnn8UrWdIp7bEv7QIa8Jn27Ul7o/I+tv/iRmPDybIDknvvIkVE+69vjA4/6sYNZYBIAGfYfR5zA0gVDSLNHSiCYPFODz+Eaq2hfHIMjd1Ydh4remVixUOJG6YQTI7nHxxRsa5eQ/oUEnGuF+0Ql5w0R8mWEcUAbpOY50MlzWTHb6xBKFRxkon6QbIGONVRBEsk4VzHtISTgKiDGLnyFrnaUDh/CGvcotOgzNnzFCBk8Fk5GWTHcEWogCTKIgIsLpRuqSCPl7NE8Rc8LCQqJiryLEXCuFe4rdLWKCAfz3QzhLfc9hZah1velo/N8AN0RaiCjvQrw5YuAd0dMck+o/aB6FpX3EiPgCqzUpfH5FquAxSPWN07Xk3ELhu8bCbVK4cR4YSYDia8uuSiFwCekV746NYsS1rcCBJxTL1wF/LO1QP/e2vrzdwLGpGMfqq9B2zh3fH5IYSLNEAQ8dlL3PdcE6gNfck/oXUDbfXTWeayAK9CZrwkVurKF6TyLFcLmscPoBFTsfO2gFOgxhyDgsc9PBLx7bO3pS+BZoIs1QFnniIBzrXBfrQDbBIHtJgnxdOFKmYPuk0tgiFmKF4uB4GMygLodsnDDcNk35gNjxLaI71uDCLhiWuEqcJE7Y2jy3svFNuHU/ZhZOsXcoCLz0lMphIrRcfQZX82J6hG6xRTkUImPh5LWt2IIuM1ijiFU6GrT+Ff4zs7jd/PxVNiSQ/fd54Q0emzXaLE0aIEjMXT64aR+FlYLhe8W831rUAFXjHq5Gp841y/Zv6RRWkEz9DQlJwxRketzTgM9dh8ujCm9A4j1Le9Kf2wjDFm00Bqr4qqrGmGIDa2YjaBrBbgsoqEsF2UbKSwsfuWp42Wvr/Oj5zpRdEjcb+Dv7qmRlRDyWxbwrlmSUYSGZEqYbX9UgXaFrnWgONa3ShDwHaMolf7d0BIQrq0tw2PL8KcpakQvPVtrnNFDiXOItW5tnTJK7MuLRihoYjKZx0hTGG1C2ey4htiRrbuwvlWCgCtqpN9aW/3oQldSoAoHqU+smRji3xc+S6UrDoBQ5phEfGptycutLm48sTyn5oLnoXt7bFiy647bIKc+EMv6VkwfuMYX2O6jq4nKWwvHOgALBZh8ShRwSdkeFn2FZI6FO+oE9KfrUsHISmMqdbWxFAFXzIgUX6GrnNxiONaGWagpJTY8VcCH0JEi5zAEl48PtrUmFGcOrjSmUp9nqoAfChS6EvxwquaFMmJLMoSOFDmHIU96ytqwwwZ9x0IVDIOkCrhinoCv0JXgh+tK+dURYcMBnRTt0wq/JVfag1jfg2XJXEM4iRwCfmIKiq/QleCHU6hJZZw8vmUBH6oF/llCBwcNx/pOfh9zCLgqVOhKcBMqx+si1/wDKnJ9pqejxx5agsyFxFsit4YLJxw0iwcil4BXTOvAV+hK8OMrx+sjx/JhqIA/9DjngUbgDMnKfTUSfYThwnk+WUaluQR8aYnXjEUmZfhsenKlnMDj9rVYAloc6jIAF8qFAgM+0nslpZWHDZoyr8kSyJGSyGOSMiz/FEixLw3Hfx+iq2G4dqWgCVWc7L8mL2DI1KYHSxJtlzniq/+dILq2zMP3xBdPiYrFAEOD0QJkJhN6d5MM2BwCzknxbrLp0U86dj/8nlKruSMgLjtQwGcFa7PY4FhGOQT8IJONbNB3cW5xBzY7gJLG1DqxU0l+H3IIeI4XMlToSvCzoobapYVyIDcKIpJd1WbhWEaS4Tg+To621MVznGeYiEwuLZLqA+f6f2zIRA0fblRKKqhITjp6uV4YnZnMxQgIaMq8i6ROIFXAc7ofZj2J0K3w0kOVuh0jfPSucGe9Y7r0xIAQYkFXmfdxl+I+ThHwnNa3RuLC01h3XMsjZZ3UEoK5Y75YoYVpBcEk92iNbYWnCHiJVPiuCl3dKqce7h83lPGR5jxyxIfrFW044i31RQQEbg13H58sk7FRcAV8SaZ/CaTQVRpbZpnfFLiur3vqdFKMAT2By32pVlJfRAAo5WpjGV5cAS9p5Umhq3S462hy4WaFKnrevxmjhxhLREcAnGhpP+5k0leJPBEA0JV2EB45hisnjBAdQqChZopu1E78kmy462imsE4cmc0ozf+J2szJEla6JPHO8RIdZdK8M/qshZMLzjqXKGv0GBwLHL2IFSM6QgpdpbNlLv6QwjLTMWdkJDw1PveZxPsirhMBhJO0c6bM3Fhg9zEq4Kj1/ZWsKI5LRApdpdO1hVn14L5BuUiNkR+syFDSoyfzI/NQP5kz1zldg6Wf4ZpBqAsFFWL9fV0zHL0J3AV5b2HIloMD876ncKD7/1LQX8hFxPstSNSOrdDXvvHft5pJzYlSejXmVzY0VxMDVDMIEfA5WG+jGVu7ZQxD+i505cNWh0EZ5T+H4r/fUCdYKmrIxoGSHfYdH9fHke6DzKvwsK0Y3/z/1Pd0ZTyfobzz3Eqr5uh3R/oXo30zaqdRk+uIgCM+aVtsbcWcWCtd6Kp5XbZjoZXQ9gMTirox/dnaWpaK7tuWsdBrbp7JeBCf97CxWalni6ibVRsPhZ8rx/q2JYZtgZHwOreAz8Hh1sZxU7eMUJzSha66dC/0xYHC/PoQUt0Ydz24VM7IyyAMkpnRbnzzbxeLqFfU7mxaFMOKMYI8O0Qf8UBEa17sJCZifbsuQMOZWJM6FelwMyZzsCcj4EtHE5wXOtZCxPvdoF0892SoPNFo31ZbPAZurW/XSA8tOxGlkzECPgUnEkNiv2dkCkqhq3T6qlhoohN1PhfqTM4k3HPPKFAQYuCEDb4GDAZk7eCoKLwYFwpyIbErLddC8t/WVj99rOhya+x7dKVo9LB2R9bRKjEB6EjXtbNESeTkFLl6k0ySjh9u2GDIQKpAX/gmtM+QgE/B0EHvwQxONLGE+NV1oStJ8ElDR6UMIcTv0GhfS090j4mexCo9gWXSR6EwoR9yTVzaQHzhejFwZxsPCTiyKOwrONG4phNEhik6MN55QUKQiu7jH/RFW3yvSZf3WlZkEvqGEzZoi7pzgVjhk1B6fUjAEevbeRAH6HBCxVzQQFhkEqNS4ln76T60tgq3hH6+zTUiF0aWZfNvuerMjBmOm9Y1cekCscK9eucTcGTBBtT61mwYC0OModBVShryq1HISXz+QiqVJWMyFjMnounaMv92K2n3nGqDr4z3tCIjKsaFPPGtm/nher22NhIn4GI+JlicD8ZwPpbngL+9blzfWlu744uv1xSEd8a28BoCPmK1acpcGPyfARekizkQyHF2zQu5BBwR1VdH9iLCPhCkb+MfHiu8CwE/G6ti2z6CINjReqHdOaYrJ/dqN7ECzlmO7/fEtQuQY1qvwyXgiKB+dpn3AEhvpPnqiU/PIeAi0ILQHzZxN4U/1lK2Cl8Djl5cSLdS5qkQ3bMayjYBRy7Gadoz4NTMcD2cmGsQgRaEceMSdy38dx6NMDkw3Ds5DFcFWuEtd41NwF+AMJpcF6GYPihrr0Tbtka8sPmvCLQgCJqVo4iWD5fucECs8NbcX1PAkZ3lGEI0WQPVCrUFvRJBFgSByQsZj4jvvWUJJ4JY4W/m/poCjuwo1YHvwox+OTbCoPaNUpKCIAg50ZZ1818t8CV0DzGc3xzfFPC6F/pf6+tufFEgKWifuljVgiC8F2KN5zeeD7MaIdKrHAsKrPioBUF4b8TOJU5MP7gWcLRolWQICoIg5AMps/1Dq7WAI0WrVKDmrSAIgoATm739Y30E7QOPSZs/Gjn8nHKLgiAIgp+1UUbWF5te6/GiFnAdB+lKbOmy5rIgCILwE52YVEfD6MSl71Ujlfr4f9NCgQIv8apNAAAAAElFTkSuQmCC"
                  alt=""
                />
              </div>
              <div style="width: 100%; text-align: center">
                <p
                  style="
                    color: #ffffff;
                    font-size: 14px;
                    font-weight: bold;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    font-family: '맑은 고딕';
                  "
                >
                  T. 070-8656-0670 | E. contact@xenoplex.kr | xenoplex.co.kr
                </p>
              </div>
            </div>
            <div
              style="
                box-sizing: border-box;
                border: 1px solid #32425f;
                border-bottom: 10px solid #32425f;
                width: 430px;
                height: 240px;
                display: flex;
                flex-wrap: wrap;
                -ms-flex-wrap: wrap;
                -webkit-flex-wrap: wrap;
                color: #32425f;
                padding: 25px 25px 10px 25px;
              "
            >
              <div style="width: calc(53% - 10px); margin-right: 10px">
                <p
                  style="
                    font-size: 14px;
                    font-family: '맑은 고딕';
                    margin-top: 0px;
                    margin-bottom: 0px;
                    letter-spacing: 1px;
                  "
                >
                  <span style="font-size: 22px; letter-spacing: 5px">
                    {{ krName }}
                  </span>
                  {{ enName }}
                </p>
                <hr
                  align="left"
                  style="
                    height: 1px;
                    background-color: rgb(0, 0, 0);
                    border: 0px;
                    margin-top: 5px;
                    margin-bottom: 5px;
                  "
                />
                <p style="font-size: 13px; margin-top: 0px; margin-bottom: 0px; font-family: '맑은 고딕';">
                  {{ desc }}
                </p>
              </div>
              <div style="margin-left: 10px">
                <p
                  style="
                    font-size: 15px;
                    font-family: '맑은 고딕';
                    margin-top: 0px;
                    margin-bottom: 0px;
                    margin-top: 7px;
                  "
                >
                  M. {{ telNum }}
                </p>
                <p
                  style="
                    font-size: 15px;
                    font-family: '맑은 고딕';
                    margin-top: 0px;
                    margin-bottom: 0px;
                    margin-top: 3px;
                  "
                >
                  E. {{ email }}@xenoplex.kr
                </p>
              </div>
              <div style="width: 100%; align-self: end">
                <p
                  style="
                    font-size: 12px;
                    font-family: '맑은 고딕';
                    line-height: 150%;
                    margin-top: 0px;
                    margin-bottom: 0px;
                  "
                >
                  <b>제노플렉스</b>
                </p>
                <p
                  style="
                    font-size: 12px;
                    font-family: '맑은 고딕';
                    line-height: 150%;
                    margin-top: 0px;
                    margin-bottom: 0px;
                  "
                >
                  <b>본사</b>. 대구광역시 동구 경대로 36, 무지개빌딩 6층
                </p>
                <p
                  style="
                    font-size: 12px;
                    font-family: '맑은 고딕';
                    line-height: 150%;
                    margin-top: 0px;
                    margin-bottom: 0px;
                  "
                >
                  <b>플랫폼센터</b>. 서울특별시 송파구 정의로 70 KDU타워 705호
                </p>
                <p
                  style="
                    font-size: 12px;
                    font-family: '맑은 고딕';
                    line-height: 150%;
                    margin-top: 0px;
                    margin-bottom: 0px;
                  "
                >
                  <span style="font-size: 13px"
                    >T. 070-8656-0670&nbsp;| E. contact@xenoplex.kr&nbsp;</span
                  ><span style="font-size: 14px">| xenoplex.co.kr</span>
                </p>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>

      <q-card class="col">
        <q-card-section class="flex justify-between items-center">
          <span class="text-h6">
            경량화 코드
          </span>
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
            <q-tooltip class="text-body1">
              클립보드에 복사
            </q-tooltip>
          </q-icon>
        </q-card-section>
        <q-separator />
        <q-card-section class="q-py-xs">
          <highlightjs
            language="html"
            :code="minifyCode"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from "vue";
import IMEInput from 'src/components/IME/IMEInput';
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import { useQuasar } from "quasar";
// const minify = require('html-minifier').minify;

export default defineComponent({
  name: "IndexPage",
  components: {
    IMEInput,
    highlightjs: hljsVuePlugin.component
  },
  setup() {
    const $q = useQuasar();

    const krName = ref('신규현');
    const enName = ref('Tom Shin');
    const desc = ref('Software Development Engineer');
    const telNum = ref('010-8905-7546');
    const email = ref('tom.shin');

    const minifyCode = ref('');

    const hasClipboard = ref(!!navigator.clipboard);

    function updateCode() {
      minifyCode.value = document.getElementById('preview')?.innerHTML||'';
    }

    function copyCodeToClip() {
      navigator.clipboard.writeText(minifyCode.value)
        .then(() => {
          $q.notify({
            message: '복사 성공!!',
            color: 'green',
            icon: 'done_all'
          })
        })
        .catch(() => {
          $q.notify({
            message: '복사 실패!! 반복적으로 실패 시 담당자에게 문의해주세요.',
            color: 'red',
            icon: 'sentiment_very_dissatisfied'
          })
        })
    }

    onMounted(() => {
      updateCode();
    });

    watch(
      () => [krName, enName, desc, telNum, email],
      () => {
        updateCode();
      },
      {
        deep: true
      }
    );

    return {
      krName,
      enName,
      desc,
      telNum,
      email,
      minifyCode,
      hasClipboard,

      //functions
      copyCodeToClip,
    };
  },
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
</style>
