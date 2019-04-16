from django.urls import path


from .views import Logout, Login, CreateSubmission, ListSubmissions


urlpatterns = [
    path('api/v1/login/', Login.as_view()),
    path('api/v1/logout/', Logout.as_view()),
    path('api/v1/submission_create/', CreateSubmission.as_view()),
    path('api/v1/submission_list/', ListSubmissions.as_view()),
]
