<template>
  <ion-page>
    <div class="mt-2">
      <h2 class="text-center text-2xl font-semibold">NewTask</h2>
    </div>

    <Form class="flex flex-col justify-center h-full">
      <div>
        <ion-item>
          <Field v-slot="{ field }" name="taskField" :rules="isRequired" v-model="task">
            <ion-input v-bind="field" type="text" name="taskField" placeholder="What are you planning?"></ion-input>
          </Field>
        </ion-item>
        <ion-item lines="none">
          <ErrorMessage v-slot="{message}" name="taskField"> 
              <ion-text color="danger" v-if="message"></ion-text>
          </ErrorMessage>
        </ion-item>
      </div>

      <div>
          <ion-item>
              <ion-icon :icon="notifications" color="primary" slot="start"></ion-icon>
              <Field v-slot="{field}" name="duedateField" :rules="isRequired">
                  <ion-datetime v-bind="field" v-model="dueDate" 
                  display-format="MMM DD, YYYY HH:mm"
                  display-timezone="utc"
                  value="2020-11-11T14:51:56.646+01:00" max="2025-12-31"
                  ></ion-datetime>
              </Field>

          </ion-item>
          <ion-item>
              <ErrorMessage v-slot="{message}" name="duedateField"> 
              <ion-text color="danger" v-if="message"></ion-text>
          </ErrorMessage>
          </ion-item>

          <ion-item>
              <ion-icon :icon="document" color="primary" slot="start"></ion-icon>
              <ion-textarea v-model="note" placeholder="Enter more information here"></ion-textarea>
          </ion-item>
      </div>
    </Form>
    <ion-fab
      vertical="top"
      horizontal="end"
      slot="fixed"
      class="cursor-pointer"
      @click="$emit('close-modal')"
    >
      <ion-icon :icon="close" class="text-3xl"></ion-icon>
    </ion-fab>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from "@vue/runtime-core";
import { IonPage, IonFab, IonIcon, IonItem, IonInput, IonText, IonDatetime,IonTextarea} from "@ionic/vue";
import { close, notifications, document} from "ionicons/icons";
import { Form, Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  components: {
    IonPage,
    IonFab,
    IonIcon,
    IonItem,
    IonInput,
    IonText,
    IonDatetime,
    IonTextarea,
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
      const task = ref('');
      const dueDate = ref('');
    const isRequired = (value) => {
      if (!value) {
        return "This field is required";
      }
      return true;
    };
    return {
      isRequired, task,dueDate,
      close,notifications,document
    };
  },
});
</script>

<style>
</style>