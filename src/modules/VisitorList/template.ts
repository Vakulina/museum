export const getTemplate = (styles: any) => `
<p class="${styles.visitorList__paragraf}">Fill in the information for each visitor.</p>
<div class="${styles.visitorList__line}"></div>
<div class='${styles.visitorList__inputs}'>
<input type="text" id="last-name" placeholder="Surname">
<input type="text" id="first-name" placeholder="Name">
</div>
<button type="button" id="add-visitor">add visitor</button>
<ul id="visitor-list" class='${styles.visitorList}'>


</ul>

<button type="button" id="remove-selected" disabled >remove</button>
    <template id="item-template"> 
      <li class='${styles.visitorList__item}'>
        <input type="text" placeholder="Surname" data-input='surname'>
        <input type="text" placeholder="Name" data-input='name'>
   <input type="checkbox" class='${styles.visitorList__delete}' data-btn='select-to-remove'/>
      </li>
    </template>
`;
