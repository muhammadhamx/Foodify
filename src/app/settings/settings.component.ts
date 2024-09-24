import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

    // Profile form data
    profile = {
      name: '',
      email: '',
      profilePicture: null as File | null
    };
  
    // Password form data
    password = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
  
    // Forgot password email
    forgotPasswordEmail: string = '';
  
    // Branch management form data
    branch = {
      name: '',
      location: ''
    };
  
    // Method to handle profile form submission
    updateProfile() {
      console.log('Profile updated with the following data:');
      console.log('Name:', this.profile.name);
      console.log('Email:', this.profile.email);
      if (this.profile.profilePicture) {
        console.log('Profile Picture:', this.profile.profilePicture.name);
      }
    }
  
    // Method to handle password update
    updatePassword() {
      if (this.password.newPassword === this.password.confirmPassword) {
        console.log('Password updated:');
        console.log('Current Password:', this.password.currentPassword);
        console.log('New Password:', this.password.newPassword);
      } else {
        console.log('New password and confirm password do not match!');
      }
    }
  
    // Method to handle forgot password
    sendResetLink() {
      console.log('Reset password link sent to:', this.forgotPasswordEmail);
    }
  
    // Method to handle adding a new branch
    addBranch() {
      console.log('Branch added with the following details:');
      console.log('Branch Name:', this.branch.name);
      console.log('Branch Location:', this.branch.location);
    }
  
    // Handle file input for profile picture
    onProfilePictureChange(event: any) {
      const file = event.target.files[0];
      if (file) {
        this.profile.profilePicture = file;
        console.log('Profile picture selected:', file.name);
      }
    }

}
