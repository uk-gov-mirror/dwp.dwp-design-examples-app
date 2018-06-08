module.exports = {
  h1: 'Declaration',
  // status: 1 = experimental, 2 = tried and tested, 3 = recommended
  status: 2,
  description: `
    <p>
      A way to make sure users understand the terms before submitting an application.
    </p>
  `,
  whenToUse: `
    <p>
      The declaration is the digital equivalent to signing a paper form. 
      You should only use it when you have a rules in your policy that could 
      affect your users legally. 
    </p>
    <p>
      It should also be used if using your service could alter their quality of 
      life. For example, if applying for a benefit might reduce other support 
      they may be receiving.
    </p>
  `,
  whenNotToUse: `
    <p>
      You must not use the declaration if your content is not clear. Legal wording 
      should be simplified to remove jargon.
    </p>
    <p>
      Your declarion should be short and to the point. It should not be used as 
      a catch all method to bypass good content design in the rest of your service.
    </p>
  `,
  research: `
    <ul class="list list-bullet">
      <li>User type: Citizens</li>
      <li>Accessibility: Tested on JAWS, Dragon, Zoomtext and Read&Write</li>
    </ul>
  `,
  servicesUsing: `
    <ul class="list list-bullet">
      <li>Check your State Pension</li>
    </ul>
  `,
  discussion: {
    linkText: 'Discuss declarions on GitHub',
    linkURL: 'https://github.com/dwp/design-examples/issues/11'
  }
}