module.exports = {
  h1: "Tabs",
  status: "EXPERIMENTAL",
  description: `
    Accessible tabs that show and hide related content.
  `,
  whenToUse: `
    <p>
      Tabs don't test well on citizen facing services, so are usually reserved 
      for agent facing services. Tabs are used to break down related content into 
      more manageable chunks. Tabs should be only be used when you have a lot of 
      related content on one page, and should only be used as a progressive 
      enhancement to sections with headings.
    </p>
  `,
  whenNotToUse: `
    <p>
      Tabs should generally not be used on citizen facing services as research 
      suggests the ‘one thing per page’ is more effective. Tabs should not be used 
      as a substitute for a navigation menu or a sub-navigation menu. They should 
      not be used to link between different pages and URL's, or to link content 
      together that is unrelated.
    </p>
  `,
  research: `
    <ul class="list list-bullet">
      <li>User type: Agents</li>
      <li>Accessibility: Tested on JAWS, Dragon, Zoomtext and Read&Write</li>
    </ul>
  `,
  servicesUsing: `
    <ul class="list list-bullet">
      <li>Manage Bereavement Support Payment</li>
      <li>Support for Check Your State Pension</li>
      <li>Access to Work Integrated System</li>
    </ul>
  `
}