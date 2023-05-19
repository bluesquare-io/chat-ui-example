<template>
    <BaseLayout>
        <div class="max-w-4xl p-6">
            <h1 class="font-bold uppercase text-3xl py-3">Application UI</h1>

            <p class="text-sm mb-2">
                <a href="https://tailwindui.com/#product-application-ui" class="text-primary-700" target="_blank">Source</a>
            </p>

            <p class="text-sm">
                <strong>Configuration</strong><br/>
                Les couleurs <code>primary</code> et <code>secondary</code> se personnalisent dans <code>tailwind.config.js</code>.
            </p>

            <h2 class="mt-3 font-bold uppercase text-xl py-3">Lists</h2>
            <Showcase name="Table">
                <Story name="Default" class="bg-gray-100">
                    <Table>
                        <template #head>
                            <TableHeading class="pl-4 sm:pl-6">Name</TableHeading>
                            <TableHeading>Title</TableHeading>
                            <TableHeading>Status</TableHeading>
                            <TableHeading>Role</TableHeading>
                            <TableHeading/>
                        </template>
                        <TableRow>
                            <TableCell class="sm:pl-6">
                                <div class="flex items-center ">
                                    <div class="h-10 w-10 flex-shrink-0">
                                        <Avatar size="sm" status="online"/>
                                    </div>
                                    <div class="ml-4">
                                        <div class="font-medium text-gray-900">Jean Dupont</div>
                                        <div class="text-gray-500">jean@dupont.fr</div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell class="text-sm text-gray-500">Directeur</TableCell>
                            <TableCell class="text-sm text-gray-500">
                                <Badge color="primary">Active</Badge>
                            </TableCell>
                            <TableCell class="text-sm text-gray-500">Administrateur</TableCell>
                            <TableCell class="text-right space-x-2 sm:pr-6">
                                <Button>Edit</Button>
                                <Button color="red">Delete</Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell class="sm:pl-6">
                                <div class="flex items-center ">
                                    <div class="h-10 w-10 flex-shrink-0">
                                        <Avatar size="sm" status="online"/>
                                    </div>
                                    <div class="ml-4">
                                        <div class="font-medium text-gray-900">Jean Dupont</div>
                                        <div class="text-gray-500">jean@dupont.fr</div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell class="text-sm text-gray-500">Directeur</TableCell>
                            <TableCell class="text-sm text-gray-500">
                                <Badge color="primary">Active</Badge>
                            </TableCell>
                            <TableCell class="text-sm text-gray-500">Administrateur</TableCell>
                            <TableCell class="text-right space-x-2 sm:pr-6">
                                <Button>Edit</Button>
                                <Button color="red">Delete</Button>
                            </TableCell>
                        </TableRow>
                    </Table>
                </Story>
                <Story name="Stripped" class="bg-gray-100">
                    <Table stripped>
                        <template #head>
                            <TableHeading class="pl-4 sm:pl-6">Name</TableHeading>
                            <TableHeading>Title</TableHeading>
                            <TableHeading>Status</TableHeading>
                            <TableHeading>Role</TableHeading>
                        </template>
                        <TableRow>
                            <TableCell class="sm:pl-6">
                                <div class="font-normal text-gray-900">Jean Dupont</div>
                            </TableCell>
                            <TableCell class="text-sm text-gray-500">Directeur</TableCell>
                            <TableCell class="text-sm text-gray-500">
                                <Badge color="primary">Active</Badge>
                            </TableCell>
                            <TableCell class="text-sm text-gray-500 sm:pr-6">Administrateur</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell class="sm:pl-6">
                                <div class="font-normal text-gray-900">Jean Dupont</div>
                            </TableCell>
                            <TableCell class="text-sm text-gray-500">Directeur</TableCell>
                            <TableCell class="text-sm text-gray-500">
                                <Badge color="primary">Active</Badge>
                            </TableCell>
                            <TableCell class="text-sm text-gray-500 sm:pr-6">Administrateur</TableCell>
                        </TableRow>
                    </Table>
                </Story>
            </Showcase>

            <h2 class="mt-3 font-bold uppercase text-xl py-3">Forms</h2>
            <Showcase name="Input Group">
                <Story name="Label">
                    <InputGroup label="Hello" class="max-w-xs" target="input-label">
                        <Input v-model="text"/>
                    </InputGroup>
                </Story>
                <Story name="Hint">
                    <InputGroup label="Hello" hint="Optional" class="max-w-xs" target="input-hint">
                        <Select :options="selectOptions" v-model="selected" class="max-w-xs"/>
                    </InputGroup>
                </Story>
                <Story name="Description">
                    <InputGroup class="max-w-xs">
                        <Input placehoder="Email address" type="email" placeholder="contact@bluesquare.io"/>
                        <template #description>We'll only use it to send spam.</template>
                    </InputGroup>
                </Story>
                <Story name="Error">
                    <InputGroup label="Bad Input" error="Something went wrong" class="max-w-xs" target="input-error">
                        <Input v-model="text"/>
                    </InputGroup>
                    <InputGroup label="Bad Textarea" error="Something terrible happened" target="textarea-error" class="max-w-xs mt-3">
                        <Textarea v-model="text" :rows="2"/>
                    </InputGroup>
                </Story>
                <Story name="Reactive label">
                    <InputGroup label="Click me" target="input-switch" class="max-w-xs">
                        <Switch v-model="active">Email notifications</Switch>
                    </InputGroup>
                </Story>
            </Showcase>
            <Showcase name="Input">
                <Story name="Default">
                    <Input v-model="text" class="max-w-xs"/>
                </Story>
                <Story name="Disabled">
                    <Input v-model="text" disabled class="max-w-xs"/>
                </Story>
                <Story name="Password">
                    <Input v-model="text" type="password" class="max-w-xs"/>
                </Story>
            </Showcase>
            <Showcase name="Select">
                <Story name="Default">
                    <Select :options="selectOptions" v-model="selected" class="max-w-xs"/>
                </Story>
                <Story name="Null">
                    <Select :options="selectOptions" :value="null" class="max-w-xs"/>
                </Story>
                <Story name="Disabled">
                    <Select :options="selectOptions" v-model="selected" class="max-w-xs" disabled/>
                </Story>
            </Showcase>
            <Showcase name="Textarea">
                <Story name="Default">
                    <Textarea v-model="text"/>
                </Story>
                <Story name="Disabled">
                    <Textarea v-model="text" disabled/>
                </Story>
                <Story name="Rows">
                    <Textarea v-model="text" :rows="6"/>
                </Story>
            </Showcase>
            <Showcase name="Checkbox">
                <Story name="Default">
                    <Checkbox v-model="checked" name="checkbox-demo"/>
                </Story>
                <Story name="Label">
                    <Checkbox v-model="checked" name="checkbox-demo-label">Hello</Checkbox>
                </Story>
                <Story name="Disabled">
                    <Checkbox v-model="checked" name="checkbox-demo-disabled" disabled>World</Checkbox>
                </Story>
                <Story name="Description">
                    <Checkbox v-model="checked" name="checkbox-demo-footer">
                        Hello
                        <template #description>
                            <p>Hello there, this checkbox is useless.</p>
                        </template>
                    </Checkbox>
                </Story>
            </Showcase>
            <Showcase name="Radio">
                <Story name="Default">
                    <Radio v-model="radio" value="hello">Hello</Radio>
                    <Radio v-model="radio" value="world">World</Radio>
                </Story>
                <Story name="Disabled">
                    <Radio v-model="radio" value="yeay">Enabled</Radio>
                    <Radio v-model="radio" value="damn" disabled>Disabled</Radio>
                </Story>
            </Showcase>
            <Showcase name="Switch">
                <Story name="Default">
                    <Switch v-model="active"/>
                </Story>
                <Story name="Label">
                    <Switch v-model="active" id="switch-demo-label">Hello</Switch>
                </Story>
                <Story name="Disabled">
                    <Switch v-model="active" disabled>I feel rejected</Switch>
                </Story>
                <Story name="Description">
                    <Switch v-model="active" id="switch-demo-description">
                        Hello
                        <template #description>
                            <p>Hello there, this switch is useless.</p>
                        </template>
                    </Switch>
                </Story>
            </Showcase>
            <Showcase name="Combobox">
                <Story name="Default">
                    <Combobox v-model="person" :options="persons" class="max-w-xs"/>
                </Story>
                <Story name="Label">
                    <Combobox v-model="person" :options="persons" label="Favorite person" class="max-w-xs"/>
                </Story>
                <Story name="Images">
                    <Combobox v-model="person" :options="personsWithImages" label="Favorite person" class="max-w-xs"/>
                </Story>
                <Story name="Disabled">
                    <Combobox v-model="person" :options="persons" disabled class="max-w-xs"/>
                </Story>
                <Story name="API request">
                    <Combobox v-model="person" endpoint="https://laravelapiw7elwuje-classic.functions.fnc.fr-par.scw.cloud" label="User" class="max-w-xs"/>
                </Story>
            </Showcase>

            <h2 class="mt-3 font-bold uppercase text-xl py-3">Feedback</h2>
            <Showcase name="Alert">
                <Story name="Default">
                    <Alert>Attention !</Alert>
                </Story>
                <Story name="Title">
                    <Alert title="Attention !">Il semblerait qu'il faut faire attention.</Alert>
                </Story>
                <Story name="Error">
                    <Alert title="Catastrophe !" type="error">Il s'est passé un truc grave.</Alert>
                </Story>
                <Story name="Information">
                    <Alert type="info">Nous essayons de faire de beaux components.</Alert>
                </Story>
                <Story name="Success">
                    <Alert type="success">Bravo ! Tout s'est bien passé.</Alert>
                </Story>
            </Showcase>

            <h2 class="mt-3 font-bold uppercase text-xl py-3">Navigation</h2>
            <Showcase name="Pagination">
                <Story name="Default">
                    <Pagination :data="users"/>
                </Story>
            </Showcase>
            <Showcase name="Tabs">
                N/A
            </Showcase>
            <Showcase name="Breadcrumb">
                <Story name="Multiple">
                    <Breadcrumb :pages="pages"/>
                </Story>
                <Story name="Empty">
                    <Breadcrumb/>
                </Story>
            </Showcase>
            <Showcase name="Steps">
                https://tailwindui.com/components/application-ui/navigation/steps#component-1f0d948b6dc88b825bef07f7503e3087<br/>
                https://tailwindui.com/components/application-ui/navigation/steps#component-50293d1ae9598e635ea76dcfdd517f93<br/>
                https://tailwindui.com/components/application-ui/navigation/steps#component-b24f3aab91136d3342f807a5a1437d0a
            </Showcase>

            <h2 class="mt-3 font-bold uppercase text-xl py-3">Overlays</h2>
            <Showcase name="Modal">
                <Story name="Default">
                    <Button @click="modal()">Prévisualiser</Button>
                </Story>
                <Story name="Vertical">
                    <Button @click="modal('warning', true)">Prévisualiser</Button>
                </Story>
                <Story name="Information">
                    <Button @click="modal('info', true)">Prévisualiser</Button>
                </Story>
                <Story name="Success">
                    <Button @click="modal('success', true)">Prévisualiser</Button>
                </Story>
            </Showcase>
            <Showcase name="Notification">
                <Story name="Default">
                    <Button @click="toast">Prévisualiser</Button>
                </Story>
                <Story name="Information">
                    <Button @click="toast('info')">Prévisualiser</Button>
                </Story>
                <Story name="Warning">
                    <Button @click="toast('warning')">Prévisualiser</Button>
                </Story>
                <Story name="Error">
                    <Button @click="toast('error')">Prévisualiser</Button>
                </Story>
            </Showcase>

            <h2 class="mt-3 font-bold uppercase text-xl py-3">Elements</h2>
            <Showcase name="Avatar">
                <Story name="Default">
                    <Avatar/>
                </Story>
                <Story name="Image (xl)">
                    <Avatar src="https://via.placeholder.com/300x300" size="xl"/>
                </Story>
                <Story name="Name, status">
                    <Avatar name="Maxime Renou" status="online"/>
                </Story>
                <Story name="Stack">
                    <AvatarStack>
                        <Avatar src="https://via.placeholder.com/300x300" size="sm"/>
                        <Avatar size="sm"/>
                        <Avatar name="Maxime Renou" status="offline" size="sm" :chars="1"/>
                    </AvatarStack>
                </Story>
                <Story name="Stack (large)">
                    <AvatarStack large>
                        <Avatar src="https://via.placeholder.com/300x300"/>
                        <Avatar/>
                        <Avatar name="Maxime Renou" status="busy"/>
                    </AvatarStack>
                </Story>
            </Showcase>
            <Showcase name="Dropdown">
                <Story name="Default">
                    <div class="text-right">
                        <Dropdown label="Hello" :options="dropdownOptions"/>
                    </div>
                </Story>
            </Showcase>
            <Showcase name="Badge">
                <Story name="Default">
                    <Badge>Hello</Badge>
                </Story>
                <Story name="Colors">
                    <div class="space-x-2">
                        <Badge color="primary">Primary</Badge>
                        <Badge color="secondary">Secondary</Badge>
                        <Badge color="red">Red</Badge>
                        <Badge color="yellow">Yellow</Badge>
                        <Badge color="blue">Blue</Badge>
                        <Badge color="green">Green</Badge>
                        <Badge color="indigo">Indigo</Badge>
                        <Badge color="purple">Purple</Badge>
                        <Badge color="pink">Pink</Badge>
                    </div>
                </Story>
                <Story name="Dot">
                    <Badge color="blue" dot>Hello</Badge>
                </Story>
                <Story name="Large">
                    <div class="space-x-2">
                        <Badge color="blue" large>Large</Badge>
                        <Badge color="blue" dot large>Large</Badge>
                    </div>
                </Story>
                <Story name="Removable">
                    <Badge color="blue" dot large @removed="toast('error')">Hello</Badge>
                </Story>
            </Showcase>
            <Showcase name="Button">
                <Story name="Default">
                    <Button>Hello</Button>
                </Story>
                <Story name="Disabled">
                    <Button disabled>Hello</Button>
                </Story>
                <Story name="Primary, secondary, muted">
                    <div class="space-x-2">
                        <Button color="primary">Hello</Button>
                        <Button color="secondary">Hello</Button>
                        <Button color="muted">Hello</Button>
                    </div>
                </Story>
                <Story name="Colors">
                    <div class="space-x-2">
                        <Button color="white">White</Button>
                        <Button color="indigo">Indigo</Button>
                        <Button color="blue">Blue</Button>
                        <Button color="red">Red</Button>
                        <Button color="yellow">Yellow</Button>
                        <Button color="green">Green</Button>
                        <Button color="pink">Pink</Button>
                    </div>
                </Story>
                <Story name="Sizes">
                    <div class="space-x-2">
                        <Button size="xs">XS</Button>
                        <Button size="sm">SM</Button>
                        <Button size="md">MD</Button>
                        <Button size="lg">LG</Button>
                        <Button size="xl">XL</Button>
                    </div>
                </Story>
                <Story name="Shapes">
                    <div class="space-x-2 flex items-center">
                        <Button rounded>Rounded</Button>
                        <Button circular>
                            <MailIcon class="h-5 w-5" />
                        </Button>
                    </div>
                </Story>
                <Story name="Icons">
                    <div class="space-x-2 flex items-center">
                        <Button color="white">
                            <MailIcon class="-ml-1 mr-2 h-5 w-5" />
                            Hello
                        </Button>
                        <Button color="white">
                            Hello
                            <MailIcon class="-mr-1 ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </Story>
                <Story name="Group">
                    <ButtonGroup>
                        <Button color="white">Hello</Button>
                        <Button color="white">
                            <MailIcon class="-ml-1 mr-2 h-5 w-5" />
                            Hello
                        </Button>
                        <Button color="primary">Hello</Button>
                    </ButtonGroup>
                </Story>
            </Showcase>

            <h2 class="mt-3 font-bold uppercase text-xl py-3">Layout</h2>
            <Showcase name="Container">
                <Story name="Default">
                    <Container class="bg-white">
                        <div class="bg-gray-200">Hello world</div>
                    </Container>
                </Story>
                <Story name="Padding">
                    <Container class="bg-white" padding>
                        <div class="bg-gray-200">Hello world</div>
                    </Container>
                </Story>
                <Story name="Padding (desktop-only)">
                    <Container class="bg-white" padding="desktop">
                        <div class="bg-gray-200">Hello world</div>
                    </Container>
                </Story>
                <Story name="Breakpoints">
                    <Container class="bg-white" breakpoints>
                        <div class="bg-gray-200">Hello world</div>
                    </Container>
                </Story>
                <Story name="Constrained">
                    <Container class="bg-white" constrained>
                        <div class="bg-gray-200">Hello world</div>
                    </Container>
                </Story>
                <Story name="Constrained (custom)">
                    <Container class="bg-white" constrained constraint="max-w-xs">
                        <div class="bg-gray-200">max-w-xs</div>
                    </Container>
                </Story>
            </Showcase>
            <Showcase name="Panel">
                <Story name="Default">
                    <Panel>
                        <p>Hey</p>
                    </Panel>
                </Story>
                <Story name="Card">
                    <Panel card>
                        <p>Exemple de Card</p>
                    </Panel>
                </Story>
                <Story name="Edge (mobile)">
                    <Panel card edge>
                        <p>Les bords ne sont plus arrondis sur mobile, pour coller aux bords de l'écran.</p>
                    </Panel>
                </Story>
            </Showcase>
            <Showcase name="List Container">
                <Story name="Default">
                    <ListContainer>
                        <div>Hello</div>
                        <div>World</div>
                    </ListContainer>
                </Story>
                <Story name="Card">
                    <ListContainer card>
                        <div>Hello</div>
                        <div>World</div>
                    </ListContainer>
                </Story>
                <Story name="Edge (mobile)">
                    <ListContainer card edge>
                        <div>Hello</div>
                        <div>World</div>
                    </ListContainer>
                </Story>
            </Showcase>
            <Showcase name="Media Object">
                <Story name="Default">
                    <div class="sm:flex">
                        <MediaObject>
                            <img class="w-full sm:max-w-20 sm:max-h-20" src="https://via.placeholder.com/300x300" alt="Placeholder">
                        </MediaObject>
                        <p>Hello World</p>
                    </div>
                </Story>
                <Story name="Responsive">
                    <div class="sm:flex">
                        <MediaObject responsive>
                            <img class="w-full sm:max-w-20 sm:max-h-20" src="https://via.placeholder.com/300x300" alt="Placeholder">
                        </MediaObject>
                        <div>
                            <p>Hello World</p>
                        </div>
                    </div>
                </Story>
                <Story name="Right">
                    <div class="sm:flex">
                        <div class="flex-1">
                            <p>Hello World</p>
                        </div>
                        <MediaObject right>
                            <img class="w-full sm:max-w-20 sm:max-h-20" src="https://via.placeholder.com/300x300" alt="Placeholder">
                        </MediaObject>
                    </div>
                </Story>
            </Showcase>
            <Showcase name="Divider">
                <Story name="Default">
                    <Divider/>
                </Story>
                <Story name="Margin">
                    <Divider class="my-4"/>
                </Story>
                <Story name="Content">
                    <Divider class="my-4">
                        <p class="bg-white px-2">Hello World</p>
                    </Divider>
                    <Divider class="my-4">
                        <Button size="xl" circular>
                            <MailIcon class="h-5 w-5" />
                        </Button>
                    </Divider>
                </Story>
                <Story name="Content justify">
                    <Divider class="my-4" justify="start">
                        <p class="bg-white pr-2">Start</p>
                    </Divider>
                    <Divider class="my-4" justify="end">
                        <p class="bg-white pl-2">End</p>
                    </Divider>
                </Story>
            </Showcase>
        </div>
    </BaseLayout>
    <Modal v-model="showModal" :type="modalType" :vertical="modalVertical" title="Hello there">
        Bla bla bla bla bla bla.
        <template #actions>
            <Button @click="showModal = false" :color="modalType === 'success' || modalType === 'info' ? 'primary' : 'red'">Okay then</Button>
            <Button @click="showModal = false">Please don't</Button>
        </template>
    </Modal>
</template>
<script>
import { MailIcon } from '@heroicons/vue/solid'
import BaseLayout from "@/Layouts/BaseLayout.vue";
import Container from "@/Components/Containers/Container.vue";
import Panel from "@/Components/Containers/Panel.vue";
import ListContainer from "@/Components/Containers/ListContainer.vue";
import MediaObject from "@/Components/Elements/MediaObject.vue";
import Divider from "@/Components/Elements/Divider.vue";
import Badge from "@/Components/Elements/Badge.vue";
import Avatar from "@/Components/Elements/Avatar.vue";
import AvatarStack from "@/Components/Containers/AvatarStack.vue";
import Button from "@/Components/Elements/Button.vue";
import ButtonGroup from "@/Components/Containers/ButtonGroup.vue";
import Dropdown from "@/Components/Elements/Dropdown.vue";
import Switch from "@/Components/Form/Switch.vue";
import Textarea from "@/Components/Form/Textarea.vue";
import Select from "@/Components/Form/Select.vue";
import Radio from "@/Components/Form/Radio.vue";
import Checkbox from "@/Components/Form/Checkbox.vue";
import Breadcrumb from "@/Components/Elements/Breadcrumb.vue";
import Pagination from "@/Components/Elements/Pagination.vue";
import Showcase from "@/Components/Showcase.vue";
import Story from "@/Components/Story.vue";
import Combobox from "@/Components/Form/Combobox.vue";
import Input from "@/Components/Form/Input.vue";
import InputGroup from "@/Components/Form/InputGroup.vue";
import Table from "@/Components/Lists/Table.vue";
import TableHeading from "@/Components/Lists/TableHeading.vue";
import TableCell from "@/Components/Lists/TableCell.vue";
import TableRow from "@/Components/Lists/TableRow.vue";
import Alert from "@/Components/Feedback/Alert.vue";
import Modal from "@/Components/Overlay/Modal.vue";

const dropdownOptions = [
    { label: 'coucou', icon: MailIcon, onClick: () => window.location.reload() },
    { label: 'tout', href: 'https://google.fr' },
    { separator: true },
    { label: 'le', route: 'dashboard' },
    { label: 'monde' },
]
const selectOptions = [
    { label: 'coucou', value: 1 },
    { label: 'tout', value: 2 },
    { label: 'le monde', value: 3 },
]
const pages = [
    { name: 'Hello', href: 'https://google.fr' },
    { name: 'tout', route: 'login' },
    { name: 'le monde', current: true },
]
const personsWithImages = [
    { id: 1, name: 'Leslie Alexander', image_url: 'https://via.placeholder.com/300x300' },
    { id: 2, name: 'Jean Dupont', image_url: 'https://via.placeholder.com/300x300' },
    { id: 3, name: 'Jeanne Dupuis', image_url: 'https://via.placeholder.com/300x300' },
]
const persons = [
    { id: 1, name: 'Leslie Alexander' },
    { id: 2, name: 'Jean Dupont' },
    { id: 3, name: 'Jeanne Dupuis' },
]

export default {
    components: {
        Modal,
        Alert,
        InputGroup,
        Input,
        Combobox,
        Story,
        Showcase,
        Pagination,
        Breadcrumb,
        Radio,
        Select,
        Textarea,
        Switch,
        ButtonGroup,
        Button,
        AvatarStack,
        Avatar,
        Badge,
        Divider,
        MediaObject,
        ListContainer,
        Container,
        Panel,
        Dropdown,
        MailIcon,
        Checkbox,
        Table,
        TableHeading,
        TableRow,
        TableCell,
        BaseLayout
    },
    data() {
        return {
            modalType: null, modalVertical: false, showModal: false,
            active: false, selected: 1, radio: 'hello', text: 'Hello World', checked: true, person: null,
            dropdownOptions, selectOptions, pages, persons, personsWithImages,
            users: {
                last_page: 24,
                current_page: 1,
                data: []
            }
        }
    },
    methods: {
        toast(type = 'success') {
            this.$notify({
                type,
                title: "Hey!",
                text: "Your account was registered!"
            }, 3000)
        },
        modal(type = null, vertical = false) {
            this.modalType = type
            this.modalVertical = vertical
            this.showModal = true
        }
    }
}
</script>
