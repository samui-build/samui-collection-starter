import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('mpl-core/collection/create', () => {
  it('runs mpl-core/collection/create cmd', async () => {
    const {stdout} = await runCommand('mpl-core/collection/create')
    expect(stdout).to.contain('hello world')
  })

  it('runs mpl-core/collection/create --name oclif', async () => {
    const {stdout} = await runCommand('mpl-core/collection/create --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
