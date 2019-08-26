# Create-React-Mole 
Auto generate component basic file to cli

This CLI tool is a tool that generates the necessary files when developing React Component.

Generate file
- Component JS File (React)
- Stylesheet File (SCSS)
- Story File (Storybook)
- test File (Jest)
- i18n message File (React-intl)

## Install
```
npm install -g create-react-mole
```

## Quick Usage
```
create-react-mole <Component-Name>
```

```
mkdir Title && cd Title
create-react-mole Title
```

support alias command

```
crmole Title 
```

## TODOs
- [x] When you set the name in CLI, you do not need to use --name
- [ ] Adding a build system
- [ ] Developed style file extension to be set between scss and css
- [ ] Added option to generate only necessary files
- [ ] Add custom template setting
- [ ] ...
