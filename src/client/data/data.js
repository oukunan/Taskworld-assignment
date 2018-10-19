const preferenceInputs = ({
  language,
  timezone,
  currency,
  visibility,
  message,
  category
}) => [
  {
    data: {
      topic: 'Localization',
      inputs: [
        {
          inputType: 'select',
          caption: 'Interested in helping translate Fancy? Let us know',
          label: 'Language',
          name: 'language',
          value: language,
          options: [
            {
              value: 'English',
              display: 'English'
            },
            {
              value: 'Thai',
              display: 'Thai'
            },
            {
              value: 'Spanish',
              display: 'Spanish'
            },
            {
              value: 'Japanese',
              display: 'Japanese'
            },
            {
              value: 'German',
              display: 'German'
            },
            {
              value: 'Korean',
              display: 'Korean'
            },
            {
              value: 'French',
              display: 'French'
            },
            {
              value: 'Italian',
              display: 'Italian'
            },
            {
              value: 'Greek',
              display: 'Greek'
            },
            {
              value: 'Vietnamese',
              display: 'Vietnamese'
            },
            {
              value: 'Malay',
              display: 'Malay'
            }
          ]
        },
        {
          inputType: 'select',
          caption: '',
          label: 'Time zone',
          name: 'timezone',
          value: timezone,
          options: [
            {
              value: '(-05:00)UTC',
              display: '(-05:00)UTC'
            },
            {
              value: '(-04:00)UTC',
              display: '(-04:00)UTC'
            },
            {
              value: '(-03:00)UTC',
              display: '(-03:00)UTC'
            },
            {
              value: '(-02:00)UTC',
              display: '(-02:00)UTC'
            },
            {
              value: '(-01:00)UTC',
              display: '(-01:00)UTC'
            },
            {
              value: '(+00:00)UTC',
              display: '(+00:00)UTC'
            },
            {
              value: '(+01:00)UTC',
              display: '(+01:00)UTC'
            },
            {
              value: '(+02:00)UTC',
              display: '(+02:00)UTC'
            },
            {
              value: '(+03:00)UTC',
              display: '(+03:00)UTC'
            },
            {
              value: '(+04:00)UTC',
              display: '(+04:00)UTC'
            },
            {
              value: '(+05:00)UTC',
              display: '(+05:00)UTC'
            }
          ]
        },
        {
          inputType: 'select',
          caption: '',
          label: 'Currency',
          name: 'currency',
          value: currency,
          options: [
            {
              value: 'USD',
              display: 'USD'
            },
            {
              value: 'THB',
              display: 'THB'
            },
            {
              value: 'EUR',
              display: 'EUR'
            },
            {
              value: 'DZD',
              display: 'DZD'
            },
            {
              value: 'JYP',
              display: 'JYP'
            },
            {
              value: 'AUD',
              display: 'AUD'
            },
            {
              value: 'DKK',
              display: 'DKK'
            },
            {
              value: 'HRK',
              display: 'HRK'
            },
            {
              value: 'XOF',
              display: 'XOF'
            },
            {
              value: 'ZAR',
              display: 'ZAR'
            },
            {
              value: 'SYP',
              display: 'SYP'
            }
          ]
        }
      ]
    }
  },
  {
    data: {
      topic: 'Privacy',
      inputs: [
        {
          inputType: 'radio',
          label: 'Profile Visibility',
          caption:
            "Manage who can see your activity. things you fancy. your followers, people you follow or in anyone's search results.",
          radios: [
            {
              name: 'visibility',
              value: 'Everyone',
              checked: visibility === 'Everyone'
            },
            {
              name: 'visibility',
              value: 'Private',
              checked: visibility === 'Private'
            }
          ]
        },
        {
          inputType: 'radio',
          label: 'Message',
          caption: 'Control who can send your messages.',
          radios: [
            {
              name: 'message',
              value: 'Everyone',
              checked: message === 'Everyone'
            },
            {
              name: 'message',
              value: 'People you follow',
              checked: message === 'People you follow'
            },
            {
              name: 'message',
              value: 'No one',
              checked: message === 'No one'
            }
          ]
        },
        {
          inputType: 'button',
          label: 'Recently viewed',
          caption: 'Manage your fancy browsing history',
          title: 'Delete all items'
        }
      ]
    }
  },
  {
    data: {
      topic: 'Content',
      inputs: [
        {
          inputType: 'radio',
          label: 'Category lists',
          caption: "Automatically and Fancy'd items to the Category list",
          radios: [
            {
              name: 'category',
              value: 'Enable',
              checked: category === 'Enable'
            },
            {
              name: 'category',
              value: 'Disable',
              checked: category === 'Disable'
            }
          ]
        }
      ]
    }
  }
];

const signupInput = ({ email, password }) => [
  {
    inputType: 'email',
    type: 'email',
    name: 'email',
    placeholder: 'Email address',
    value: email
  },
  {
    inputType: 'password',
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    value: password
  }
];

export { preferenceInputs, signupInput };
