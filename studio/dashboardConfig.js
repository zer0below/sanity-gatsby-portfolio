export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d1033c1e67e35fc27ed44c6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7bhwkyau',
                  apiId: 'b35d3e96-747a-46a5-a53d-f759512d66b5'
                },
                {
                  buildHookId: '5d1033c1e67e3560ffed449a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-si21d3r6',
                  apiId: 'e8a7c9a5-b35f-402c-b430-7230ab248ff5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zer0below/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-si21d3r6.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
