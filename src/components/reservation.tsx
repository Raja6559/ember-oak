import * as Dialog from '@radix-ui/react-dialog';
import { ArrowUpRight, X } from 'lucide-react';
import { useHydrated } from './use-hydrated';

export function Reservation({ quiet = false }: { quiet?: boolean }) {
  const ready = useHydrated();
  return <Dialog.Root>
    <Dialog.Trigger disabled={!ready} className={`button ${quiet ? 'button-outline' : ''}`}>Preview a reservation <ArrowUpRight size={16} aria-hidden="true" /></Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="dialog-overlay" />
      <Dialog.Content className="reservation-dialog">
        <Dialog.Close className="dialog-close" aria-label="Close reservation preview"><X size={24} aria-hidden="true" /></Dialog.Close>
        <p className="eyebrow">A seat at the table</p>
        <Dialog.Title>Imagine your evening.</Dialog.Title>
        <Dialog.Description>Ember &amp; Oak is a fictional restaurant concept. This is a preview of the booking journey; no table can be reserved here.</Dialog.Description>
        <ol className="reservation-steps">
          <li><span>01</span><div><h3>Choose your evening</h3><p>A live restaurant would offer available dates and times.</p></div></li>
          <li><span>02</span><div><h3>Bring your people</h3><p>Select a party size and share any dining needs.</p></div></li>
          <li><span>03</span><div><h3>Confirm your table</h3><p>The restaurant would confirm availability before your visit.</p></div></li>
        </ol>
        <p className="small-note">No personal details are collected or sent.</p>
        <Dialog.Close className="button">Back to the experience <ArrowUpRight size={16} aria-hidden="true" /></Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
