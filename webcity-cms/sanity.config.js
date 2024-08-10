import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'
import {sharedNotesNotepadPlugin} from './src/plugins/sharedNotesPlugin'

export default defineConfig({
  name: 'default',
  title: 'webcity-cms',

  projectId: 'e4zkjk7p',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), media(), sharedNotesNotepadPlugin()],

  schema: {
    types: schemaTypes,
  },
})
