import { PnpmError } from '@pnpm/error'
import { type ErrorRelatedSources } from './ErrorRelatedSources'

export interface BreakingChangeErrorOptions extends ErrorRelatedSources {
  code: string
  message: string
}

export class BreakingChangeError extends PnpmError {
  public relatedIssue?: number
  public relatedPR?: number
  public additionalInformation?: string
  constructor (opts: BreakingChangeErrorOptions) {
    super(opts.code, opts.message)
    this.relatedIssue = opts.relatedIssue
    this.relatedPR = opts.relatedPR
    this.additionalInformation = opts.additionalInformation
  }
}
