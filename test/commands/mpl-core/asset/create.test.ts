import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('mpl-core/asset/create', () => {
  it('runs mpl-core/asset/create cmd', async () => {
    const {stdout} = await runCommand('mpl-core/asset/create')
    expect(stdout).to.contain('hello world')
  })

  it('runs mpl-core/asset/create --name oclif', async () => {
    const {stdout} = await runCommand('mpl-core/asset/create --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
