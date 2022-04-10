<script lang="ts">
     import ReminderItem from "./ReminderItem.svelte";
     import Storage from "utils/localStorage";
     const REMINDERS = 'reminders';

     type Reminder = {
          reminderText : string,
          reminderId : string
     }

     let reminders = Storage.get(REMINDERS) as Reminder[] || [] as Reminder[];

     const addAReminder = ({
          reminderText,
          reminderId
     } : Reminder)=>{

          const newReminders = [
               ...reminders,
               {
                    reminderText , 
                    reminderId
               }
          ]

          Storage.set(REMINDERS , newReminders);
          reminders = newReminders;
     }

     const removeAReminder = (reminderId : string) => {
          const newReminders = reminders.filter((reminder)=>{
               return reminder.reminderId !== reminderId;
          })

          Storage.set(REMINDERS , newReminders);
          reminders = newReminders;
     }

</script>



<div class="remindersContainer">
     <h3>Reminders</h3>
     <ul class="remindersList">
     </ul>
</div>