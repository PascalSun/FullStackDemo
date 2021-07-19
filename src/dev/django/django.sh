PGPASSWORD=$POSTGRES_PASSWORD psql -U $POSTGRES_USER -h $POSTGRES_ENDPOINT -d $POSTGRES_DB < /home/dev/pgsql/add_extension.sql
python3 manage.py migrate

USER=$POSTGRES_USER
PASS=$POSTGRES_PASSWORD
MAIL="admin@local.test"
script="
from django.contrib.auth import get_user_model
User = get_user_model()  # get the currently active user model,
username = '$USER';
password = '$PASS';
email = '$MAIL';

if User.objects.filter(username=username).count()==0:
    user = User.objects.create_superuser(username, email, password);
    user.save()
    print('Superuser created.');
else:
    print('Superuser creation skipped.');
"

printf "$script" | python3 manage.py shell
python3 manage.py runserver 0.0.0.0:8000