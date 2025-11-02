## API Reference Coverage

This report lists each component under `components/ui` and the corresponding API Reference key present in `components/docs/api-reference.tsx`.

Legend: ✅ has entry · ⛔ missing

| UI File                  | API Reference Key                                 | Status |
| ------------------------ | ------------------------------------------------- | ------ |
| accordion.tsx            | Accordion                                         | ✅     |
| avatar.tsx               | Avatar, AvatarGroup                               | ✅     |
| badge.tsx                | Badge                                             | ✅     |
| banner.tsx               | Banner                                            | ✅     |
| breadcrumbs.tsx          | Breadcrumbs                                       | ✅     |
| button-group.tsx         | ButtonGroup, ButtonGroupItem, BorderedButtonGroup | ✅     |
| button.tsx               | Button                                            | ✅     |
| calendar.tsx             | Calendar, CalendarRange                           | ✅     |
| card.tsx                 | Card                                              | ✅     |
| carousel.tsx             | BeautifulImageCarousel, BeautifulCardCarousel     | ✅     |
| checkbox.tsx             | Checkbox                                          | ✅     |
| collapsible.tsx          | Collapsible                                       | ✅     |
| command.tsx              | Command                                           | ✅     |
| container.tsx            | Container                                         | ✅     |
| data-table.tsx           | DataTable                                         | ✅     |
| date-picker.tsx          | DatePicker                                        | ✅     |
| drawer.tsx               | Drawer                                            | ✅     |
| dropdown-menu.tsx        | DropdownMenu                                      | ✅     |
| dropdown.tsx             | DropDown                                          | ✅     |
| fade.tsx                 | Fade                                              | ✅     |
| header-bar.tsx           | HeaderBar                                         | ✅     |
| icon-button.tsx          | IconButton                                        | ✅     |
| image-carousel.tsx       | ImageCarousel                                     | ✅     |
| image.tsx                | Image                                             | ✅     |
| input-otp.tsx            | InputOTP                                          | ✅     |
| input.tsx                | Input                                             | ✅     |
| loader.tsx               | Loader                                            | ✅     |
| magic-card.tsx           | MagicCard                                         | ✅     |
| marquee.tsx              | Marquee                                           | ✅     |
| modal.tsx                | Modal                                             | ✅     |
| pagination.tsx           | Pagination                                        | ✅     |
| payment-form.tsx         | PaymentForm                                       | ✅     |
| profile-verification.tsx | ProfileVerification                               | ✅     |
| progress-bar.tsx         | ProgressBar                                       | ✅     |
| radio-card.tsx           | RadioCard                                         | ✅     |
| radio.tsx                | Radio                                             | ✅     |
| scroll-area.tsx          | ScrollArea                                        | ✅     |
| select.tsx               | Select                                            | ✅     |
| skeleton.tsx             | Skeleton                                          | ✅     |
| slider.tsx               | Slider                                            | ✅     |
| switch.tsx               | Switch                                            | ✅     |
| tabs.tsx                 | Tabs                                              | ✅     |
| testimonials.tsx         | Testimonials                                      | ✅     |
| textarea.tsx             | TextArea                                          | ✅     |
| toast.tsx                | Toast                                             | ✅     |
| tooltip.tsx              | Tooltip                                           | ✅     |
| typography.tsx           | Typography                                        | ✅     |

All components currently have API Reference entries.

### How to add a new component to API Reference

1. Open `components/docs/api-reference.tsx` and add a new entry under `componentAPIs` with: `name`, `description`, `import`, `props`, and optional `examples`/`presets`.
2. Use the UI import convention: `import { MyComponent } from "@/components/ui/my-component"`.
3. Render in docs with: `<APIReference componentName="MyComponent" />`.
4. Keep defaults as strings (e.g., `"md"`), and union string types quoted.
5. Run lint/build to verify.
