from django.shortcuts import render, redirect
from .forms import SignUpForm
from django.contrib.auth.decorators import login_required
from .forms import UserProfileForm
from .models import UserProfile

def signup_view(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            # redirection vers la page de connexion apres une inscription reussi
            return redirect('login')
    else:
        form=SignUpForm()
    return render(request, 'signup.html', {'form': form})


@login_required
def profile_update_view(request):
    try:
        profile = request.user.userprofile
    except UserProfile.DoesNotExist:
        UserProfile.objects.create(user=request.user)

    if request.method == 'POST':
        form = UserProfileForm(request.POST, request.FILES, instance=request.user.userprofile)
        if form.is_valid():
            form.save()
            # redirection vers le profil de l'utilisateur
            return request('profile')
    else:
        form = UserProfileForm(instance=request.user.userprofile)

    return render(request, 'profile_update.html', {'form': form})