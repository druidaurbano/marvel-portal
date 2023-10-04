export class Detail {
  type: 'comic' | 'event' | 'creator' | 'character' = 'comic';
  id?: number = 0;
  title?: string = '';
  thumbnail?: string = '';
  date?: string | null = '';
  description?: string = '';
  artists?: Array<string> = [];
  start?: string | null = '';
  end?: string | null = '';
  characters?: Array<string> = [];
  fullName?: string = '';
  comics?: Array<string> = [];
}
