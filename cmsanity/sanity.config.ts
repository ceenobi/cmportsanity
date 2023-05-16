import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'cmsanity',

  projectId: 'kinjjc03',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), cloudinarySchemaPlugin()],

  schema: {
    types: schemaTypes,
  },
})
