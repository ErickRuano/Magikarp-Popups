Magikarp-Popups
===============

Easily create modern-looking popups with a Title, Prompt and up to 8 different buttons, to which you can define a function for each.

Getting Started
===============

Load magikarp.popups.js file into your document, along with jquery and jquery ui:
  ```javascript
  <script src="magikarp.popups.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
  ```

Add the "data-social-popup" expando to any html element, it must contain the following (Each separated by ";"):

<ul>
  <li>Headline</li>
  <li>Prompt</li>
  <li>Buttons (up to 8)
  <ul>
    <li>
      :btn: prefix.
    </li>
    <li>
      Caption
    </li>
    <li>
      Background Color (Foreground will always be #fff)
    </li>
    <li>
      Function Name
    </li>
  </ul>
  </li>
</ul>

For example:

```html
<img src="http://www.pentcloud.com/social/app/images/addTask.png" data-social-popup="Eliminar Contacto;¿Estás seguro de querer eliminar este contacto?;:btn:Si-#f9ae41-deleteContact:btn:No-#ef3e42-SocialPopupsHide">
```

When clicked would create the following result:

<img src="http://gyazo.com/38d6d18c1399c9f2dadda0e74c8bd075.png">

So that when we click on "Si" it will call deleteContact() and when we click on "No" it will call SocialPopupsHide().

SocialPopupsHide() is a built-in function that will destroy the popup after used, you might include it in your own callback functions as well as a default for cancel buttons.
