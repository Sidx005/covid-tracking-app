import React from 'react'

const Footer = () => {
    console.log(window.innerHeight);
    
  return (
<footer class="bg-black text-white py-8">
  <div class="container mx-auto px-6 md:px-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <div>
        <h3 class="text-xl font-semibold mb-4">About Us</h3>
        <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna vel lectus facilisis, eget aliquam tortor venenatis.</p>
        <ul class="mt-4 space-y-2">
          <li><a href="#" class="text-gray-400 hover:text-white">Our Mission</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white">Careers</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white">Press</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-400 hover:text-white">Home</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white">Services</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white">Blog</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4">Contact Info</h3>
        <p class="text-gray-400">Feel free to reach out to us for any inquiries or feedback.</p>
        <ul class="mt-4 space-y-2">
          <li class="flex items-center">
            <span class="mr-2"><i class="fas fa-map-marker-alt"></i></span>
            123 Street Name, City, Country
          </li>
          <li class="flex items-center">
            <span class="mr-2"><i class="fas fa-phone-alt"></i></span>
            +1 234 567 890
          </li>
          <li class="flex items-center">
            <span class="mr-2"><i class="fas fa-envelope"></i></span>
            contact@example.com
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-8 border-t border-gray-700 pt-4 text-center">
      <p class="text-gray-400 text-sm">© 2024 Your Company. All rights reserved.</p>
      <div class="mt-4">
        <a href="#" class="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
        <a href="#" class="text-gray-400 hover:text-white mx-2">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer