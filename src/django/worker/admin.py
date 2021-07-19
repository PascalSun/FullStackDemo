from django.contrib import admin
from import_export.admin import ImportExportMixin
from worker.models import Tasks


class TimeStampAdmin(ImportExportMixin, admin.ModelAdmin):
    readonly_fields = ('created_on', 'updated_at')
    list_filter = ['function_name', 'state']
    list_display = ('id', 'function_name', 'state')


admin.site.register(Tasks, TimeStampAdmin)
