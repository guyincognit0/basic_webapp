import django.contrib.auth.models
import rest_framework.serializers


import backend.models


class LoginSerialiser(rest_framework.serializers.ModelSerializer):

    class Meta:
        model = django.contrib.auth.models.User
        fields = ('username', 'password')


class UserSerialiser(rest_framework.serializers.ModelSerializer):

    class Meta:
        model = django.contrib.auth.models.User
        fields = ('id', 'username')


class SubmissionSerialiser(rest_framework.serializers.ModelSerializer):

    class Meta:
        model = backend.models.Submission
        fields = '__all__'
