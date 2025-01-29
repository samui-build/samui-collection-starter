import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('mpl-core/asset/list', () => {
  it('runs mpl-core/asset/list cmd', async () => {
    const {stdout} = await runCommand('mpl-core/asset/list')
    expect(stdout).to.contain('hello world')
  })

  it('runs mpl-core/asset/list --name oclif', async () => {
    const {stdout} = await runCommand('mpl-core/asset/list --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
