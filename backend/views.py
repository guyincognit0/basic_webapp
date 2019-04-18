import django.contrib.auth
import rest_framework
import rest_framework.generics
import rest_framework.views
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.response import Response


import backend.models
import backend.serialisers


class Login(rest_framework.views.APIView):
    '''
    Login
    '''
    permission_classes = (rest_framework.permissions.AllowAny,)
    serializer_class = backend.serialisers.LoginSerialiser

    def post(self, request, format=None):
        username = request.data.get('username') or request.user
        password = request.data.get('password')
        user = django.contrib.auth.authenticate(request, username=username, password=password)
        if user is not None:
            django.contrib.auth.login(request, user)
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)


class Logout(rest_framework.views.APIView):
    '''
    Logout
    '''
    def get(self, request, format=None):
        django.contrib.auth.logout(request)
        return Response(status=status.HTTP_200_OK)


class CreateSubmission(rest_framework.generics.ListCreateAPIView):
    '''
    Create a submission
    '''
    queryset = backend.models.Submission.objects.all()
    serializer_class = backend.serialisers.SubmissionSerialiser


class ListSubmissions(rest_framework.generics.ListCreateAPIView):
    '''
    List all submissions

    * Accessible only to admin users
    '''
    permission_classes = (rest_framework.permissions.IsAdminUser,)
    queryset = backend.models.Submission.objects.all()
    serializer_class = backend.serialisers.SubmissionSerialiser
