import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { TraceNfts } from '../target/types/trace_nfts';

describe('trace_nfts', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.TraceNfts as Program<TraceNfts>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
