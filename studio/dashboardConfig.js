export default {
  widgets: [
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
                  buildHookId: '61b5d8b38d16ffe383a99014',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-studio-jcv3yuax',
                  apiId: 'af00333a-1fd8-4053-bfa8-e632df89d717'
                },
                {
                  buildHookId: '61b5d8b429a9c14a4764da05',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-web-wowvj3qm',
                  apiId: 'e0378c84-7a3f-405b-a275-3a86ef10d59c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TROISIDesign/sanity-kitchen',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-web-wowvj3qm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
