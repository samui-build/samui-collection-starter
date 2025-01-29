import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('mpl-core/collection/burn', () => {
  it('runs mpl-core/collection/burn cmd', async () => {
    const {stdout} = await runCommand('mpl-core/collection/burn')
    expect(stdout).to.contain('hello world')
  })

  it('runs mpl-core/collection/burn --name oclif', async () => {
    const {stdout} = await runCommand('mpl-core/collection/burn --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
