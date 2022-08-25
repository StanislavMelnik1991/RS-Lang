export type Word =
  | {
      word?: {
        id?: string | null | undefined;
        word?: string | null | undefined;
        transcription?: string | null | undefined;
        translation?: string | null | undefined;
        example?: string | null | undefined;
        explain?: string | null | undefined;
        image?: string | null | undefined;
        labels?: Array<string | null> | null | undefined;
        audio?: {
          pronunciation?: string | null | undefined;
          example?: string | null | undefined;
          explain?: string | null | undefined;
        }
      } | null | undefined;
    }
  | null
  | undefined;