Rails like FE generator
=======================

##### Keep in mind currently the master is a WIP branch.

## Command overview

- [ ] `bob new my_app [options]`
- [ ] `bob generate GENERATOR [args] [options]`
- [ ] `bob generate component NAME [method method] [options]`
- [ ] `bob generate service NAME [method method] [options]`
- [ ] `bob generate helper NAME [method method] [options]`
- [ ] `bob generate mixin NAME [method method] [options]`
- [ ] `bob cull NAME` 

## The cull command

The cull command should be used if you want to create a custom generator based on the current folder structure.
The generator cli will parse the current folder structure - generate an config.json file which can be re-used. 

## Develop
1. git clone https://github.com/ifahrentholz/generator
2. cd generator
3. npm link
4. shell: `bob -h`
5. 
