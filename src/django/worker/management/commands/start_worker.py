from django.core.management.base import BaseCommand
from worker.worker import LongRunworker


class Command(BaseCommand):

    help = 'Starts the long running worker'

    def handle(self, *args, **kwargs):
        worker = LongRunworker()
        worker.worker()
