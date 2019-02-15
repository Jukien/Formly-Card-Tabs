<h1>Formly sandbox</h1>

[Demo on Stackblitz](https://stackblitz.com/github/Jukien/Formly-Sandbox)

To facilitate the positionning of fields we can use multiple formly-form (works only with **Formly 5.x**):

![Multiple formly-form](src/assets/images/multiple-formly-form.PNG "Multiple formly-form")

Here the tabs component is not include in a formly custom type. The layout and the fields of the form are separate.  
The layout design is out of the formly fields system.


If we want all packed in, we need to create a custom type for the tabs component:

![One formly-form](src/assets/images/one-formly-form.PNG "One formly-form")
