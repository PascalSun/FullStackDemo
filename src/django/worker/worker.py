"""
    This Function is at the root of the worker and will run perpetually,
    scanning for messages in the queue and processing them one at a time
"""
import time
import traceback

from worker.functions import FUNCTIONS
from worker.models import COMPLETED, ERROR, PROGRESS, QUEUED, Tasks


class LongRunworker:

    def worker(self):
        try:
            print('Start to loop the work')
            # get messages and trigger the appropriate handler
            while True:
                # Get a message
                try:
                    tasks = Tasks.objects.filter(state=QUEUED)
                    if tasks:
                        for task in tasks:
                            print('start to run the worker')
                            # split the task up based on the message and call the relevant handler function
                            # return result will be True/False, True means we can delete this task from queue
                            result = self.run_handler(task)
                            if result:
                                task.state = COMPLETED
                                task.save()
                            else:
                                pass
                    else:
                        print('no task, sleep 10s')
                    time.sleep(10)
                except Exception as e:
                    print(e, 'error happen when process a specific sqs message')
                    traceback.print_tb(e.__traceback__)
                    tb = traceback.format_exc()
                    print(tb)
                    time.sleep(10)
        except Exception as all_e:
            print(all_e, 'error happened when connect to sqs')

    def run_handler(self, task):
        task.state = PROGRESS
        task.save()
        try:
            result = FUNCTIONS[task.function_name](task)
            if result:
                task.state = COMPLETED
                task.logs = result
                task.save()
        except Exception as e:
            print(e)
            task.logs = str(e)
            task.state = ERROR
            task.save()
