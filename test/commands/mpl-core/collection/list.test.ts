import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('mpl-core/collection/list', () => {
  it('runs mpl-core/collection/list cmd', async () => {
    const {stdout} = await runCommand('mpl-core/collection/list')
    expect(stdout).to.contain('hello world')
  })

  it('runs mpl-core/collection/list --name oclif', async () => {
    const {stdout} = await runCommand('mpl-core/collection/list --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
