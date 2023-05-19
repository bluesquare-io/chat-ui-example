<template>
  <NotificationGroup>
    <div class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
      <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
        <Notification
            enter="transform ease-out duration-300 transition"
            enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enter-to="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leave-from="opacity-100"
            leave-to="opacity-0"
            move="transition duration-500"
            move-delay="delay-300"
            v-slot="{ notifications, close }">
          <CustomNotification
              v-for="notification in notifications"
              v-bind="notification"
              :key="notification.id"
              @close="close"
          />
        </Notification>
      </div>
    </div>
  </NotificationGroup>
</template>
<script>
import CustomNotification from "@/Components/Overlay/Notification.vue";

export default {
  components: {
    CustomNotification
  }
}
</script>
