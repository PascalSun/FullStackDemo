from django.db import models
from worker.constants import FUNCTIONS_CHOICES

# from django.db.models.signals import post_save
# from django.dispatch import receiver

# Create your models here.
QUEUED = 'QD'
PROGRESS = "PR"
ERROR = "ER"
COMPLETED = "CM"
STATE_CHOICES = (
    (QUEUED, 'queued'),
    (PROGRESS, 'in progress'),
    (ERROR, 'error'),
    (COMPLETED, "completed")
)


class Tasks(models.Model):
    created_on = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    function_name = models.CharField(max_length=50,
                                     choices=FUNCTIONS_CHOICES,
                                     help_text="function will be called")
    state = models.CharField(max_length=10,
                             choices=STATE_CHOICES,
                             default=QUEUED,
                             help_text="task state")
    logs = models.JSONField(default=dict, null=True, blank=True)
    message = models.JSONField(default=dict, null=True, blank=True)

    def __str__(self):
        """ String representation """
        return 'task: {}'.format(self.function_name)
