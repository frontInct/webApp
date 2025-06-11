// import type { Meta, StoryObj } from '@storybook/react'
// import { CheckBox } from './CheckBox'

// const meta: Meta<typeof CheckBox> = {
//   title: 'Components/Checkbox',
//   component: CheckBox,
//   tags: ['autodocs'],
//   argTypes: {
//     label: {
//       control: 'text',
//       description: 'Текст рядом с чекбоксом',
//     },
//     checked: {
//       control: 'boolean',
//       description: 'Состояние чекбокса',
//     },
//     disabled: {
//       control: 'boolean',
//       description: 'Отключенное состояние',
//     },
//     onChange: {
//       action: 'changed',
//       description: 'Обработчик изменения',
//     },
//   },
// }

// export default meta

// // Базовые истории

// export const Primary: StoryObj<typeof CheckBox> = {
//   render: () => (
//     <div style={{ background: '#121112', padding: '16px' }}>
//       <CheckBox label='Check box' />
//     </div>
//   ),
// }
// export const WithoutText: StoryObj<typeof CheckBox> = {
//   render: () => (
//     <div style={{ background: '#121112', padding: '16px' }}>
//       <CheckBox />
//     </div>
//   ),
// }

// export const Checked: StoryObj<typeof CheckBox> = {
//   render: () => (
//     <div style={{ background: '#121112', padding: '16px' }}>
//       <CheckBox
//         label='Checked'
//         checked
//       />
//     </div>
//   ),
// }

// export const Disabled: StoryObj<typeof CheckBox> = {
//   render: () => (
//     <div style={{ background: '#121112', padding: '16px' }}>
//       <CheckBox
//         label='Disabled'
//         disabled
//       />
//     </div>
//   ),
// }

// export const DisabledChecked: StoryObj<typeof CheckBox> = {
//   render: () => (
//     <div style={{ background: '#121112', padding: '16px' }}>
//       <CheckBox
//         label='DisabledChecked'
//         disabled
//         checked
//       />
//     </div>
//   ),
// }

// import { Meta, StoryObj } from '@storybook/react'
// import { CheckBox } from './CheckBox'

// type Story = StoryObj<typeof CheckBox>

// const meta = {
//   title: 'Shared/CheckBox',
//   component: CheckBox,
//   tags: ['autodocs'],
//   argTypes: {
//     indeterminate: {
//       control: 'boolean',
//     },
//     disabled: {
//       control: 'boolean',
//     },
//     label: {
//       control: 'text',
//     },
//     checked: {
//       control: 'boolean',
//     },
//   },
// } satisfies Meta<typeof CheckBox>

// export default meta

// export const Default: Story = {
//   args: {
//     label: 'Checkbox label',
//   },
// }

// export const Checked: Story = {
//   args: {
//     label: 'Checked checkbox',
//     checked: true,
//   },
// }

// export const Indeterminate: Story = {
//   args: {
//     label: 'Indeterminate state',
//     indeterminate: true,
//   },
// }

// export const WithoutLabel: Story = {
//   args: {},
// }

// export const DisabledStates: Story = {
//   render: () => (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
//       <CheckBox label="Disabled unchecked" disabled />
//       <CheckBox label="Disabled checked" checked disabled />
//       <CheckBox label="Disabled indeterminate" indeterminate disabled />
//     </div>
//   ),
//   parameters: {
//     docs: {
//       description: {
//         story: 'Все варианты чекбоксов в disabled состоянии',
//       },
//     },
//   },
// }

// export const FocusStates: Story = {
//   render: () => (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
//       <CheckBox label="Focus unchecked" className="force-focus" />
//       <CheckBox label="Focus checked" checked className="force-focus" />
//       <CheckBox label="Focus indeterminate" indeterminate className="force-focus" />
//     </div>
//   ),
//   parameters: {
//     docs: {
//       description: {
//         story: 'Все варианты чекбоксов в focus состоянии (используем класс для эмуляции)',
//       },
//     },
//   },
// }

// export const InteractiveStates: Story = {
//   render: () => (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
//       <CheckBox label="Hover unchecked" className="force-hover" />
//       <CheckBox label="Active unchecked" className="force-active" />
//       <CheckBox label="Hover checked" checked className="force-hover" />
//       <CheckBox label="Active checked" checked className="force-active" />
//     </div>
//   ),
//   parameters: {
//     docs: {
//       description: {
//         story: 'Интерактивные состояния чекбокса (используем классы для эмуляции)',
//       },
//     },
//   },
// }

import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './CheckBox'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' }, 
      ],
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export const DefaultWithLabel: Story = {
  args: {
    label: 'check-box'
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
  }
}

export const DisabledWithLabel: Story = {
  args: {
    disabled: true,
    label: 'check-box'
  }
}

export const Checked: Story = {
  args: {
    checked: true,
  }
}

export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  }
}