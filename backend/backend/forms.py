from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import UserProfile

class SignUpForm(UserCreationForm):
    display_name = forms.CharField(max_length=255, help_text='Required. Add a display name.')
    avatar = forms.ImageField(required=False, help_text='Optional. Upload an avatar')

    class Meta:
        model = User
        fields = ('username', 'display_name', 'avatar', 'password1', 'password2', )

    def save(self, commit=True):
        user = super(SignUpForm, self).save(commit=False)
        if commit:
            user.save()
            user_profile = UserProfile.objects.create(user=user, display_name=self.cleaned_data['display_name'])
            if 'avatar' in self.cleaned_data:
                user_profile.avatar = self.cleaned_data['avatar']
                user_profile.save()
        return user


class UserProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ('display_name', 'avatar', )

    def save(self, commit=True):
        user_profile = super(UserProfileForm, self).save(commit=False)
        if commit:
            user_profile.save()
        return user_profile