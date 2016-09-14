# Rails like FE generator

## Command overview

- [ ] `if new my_app [options]`
- [ ] `if generate GENERATOR [args] [options]`
- [ ] `if generate component NAME [method method] [options]`
- [ ] `if generate service NAME [method method] [options]`
- [ ] `if generate helper NAME [method method] [options]`
- [ ] `if generate mixin NAME [method method] [options]`
- [ ] `if cull NAME` 

## The cull command

The cull command should be used if you want to create a custom generator based on the current folder structure.
The generator cli will parse the current folder structure - generate an config.json file which can be re-used. 