import { createUploadthing, type FileRouter } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  logoUploader: f({ image: { maxFileSize: "4MB" } }) // accept image files only
    .onUploadComplete(({ file }) => {
      console.log("Uploaded file:", file.url);
    }),
  videoUploader: f({ video: { maxFileSize: "32MB" } }) // accept video files only
    .onUploadComplete(({ file }) => {
      console.log("Uploaded file:", file.url);
    }),
  fileUploader: f({ blob: { maxFileSize: "32MB" } }) // accept video files only
    .onUploadComplete(({ file }) => {
      console.log("Uploaded file:", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
